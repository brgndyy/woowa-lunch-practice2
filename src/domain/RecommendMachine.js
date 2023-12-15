import CALENDAR from '../constants/calendar/calendar.js';
import CONDITION from '../constants/conditions/condition.js';
import ALL_FOOD from '../database/allFood.js';
import getShuffleNum from '../utils/shuffleRandomNumer.js';
import generateRandomCategoryNumber from '../utils/generateRandomCateogoryNumber.js';

class RecommendMachine {
  #totalCoachInfo;

  #totalRecommendHistory;

  constructor(totalCoachInfo) {
    this.#totalCoachInfo = totalCoachInfo;
    this.#totalRecommendHistory = [];
  }

  recommendMenu() {
    const weeklyCategoryNumbers = this.#createWeeklyCategoryNumbers();
    this.#totalCoachInfo.forEach((info) => {
      this.#processCoachInfo(info, weeklyCategoryNumbers);
    });
    return this.#totalRecommendHistory;
  }

  #processCoachInfo(info, weeklyCategoryNumbers) {
    weeklyCategoryNumbers.forEach((randomCategoryNumber, index) => {
      const menuData = this.#createMenuData(info, randomCategoryNumber, index);
      this.#updateRecommendHistory(menuData);
    });
  }

  #createMenuData(info, randomCategoryNumber, index) {
    const { name, unsuitableFoods } = info;
    const { day } = CALENDAR[index];
    const createdRandomMenu = this.#createRandomMenu(randomCategoryNumber, name, unsuitableFoods);
    const { category } = ALL_FOOD.find((food) => food.categoryNumber === randomCategoryNumber);

    return { day, randomCategoryNumber, category, name, foodHistory: [createdRandomMenu] };
  }

  #updateRecommendHistory(menuData) {
    this.#totalRecommendHistory.push(menuData);
  }

  #shuffleRandomMenu(randomCategoryNumber) {
    const filteredMenuByCategoryNumber = ALL_FOOD.filter(
      (food) => food.categoryNumber === randomCategoryNumber,
    );

    const randomMenuIndex = getShuffleNum(filteredMenuByCategoryNumber.length);
    const totalRandomMenu = filteredMenuByCategoryNumber[randomMenuIndex - 1].title;

    return totalRandomMenu;
  }

  #createRandomMenu(randomCategoryNumber, name, unsuitableFoods) {
    let totalRandomMenu = this.#shuffleRandomMenu(randomCategoryNumber);

    while (!this.#isValidateTotalRandomMenu(totalRandomMenu, name, unsuitableFoods)) {
      totalRandomMenu = this.#shuffleRandomMenu(randomCategoryNumber);
    }

    return totalRandomMenu;
  }

  #isValidateTotalRandomMenu(randomMenu, name, unsuitableFoods) {
    const filteredFoodHistory = this.#totalRecommendHistory.filter(
      (history) => history.name === name,
    );
    return (
      !unsuitableFoods.includes(randomMenu) &&
      !filteredFoodHistory.filter((history) => history.foodHistory.includes(randomMenu)).length
    );
  }

  #createWeeklyCategoryNumbers() {
    const weeklyCategoryNumbers = [];
    while (weeklyCategoryNumbers.length < CALENDAR.length) {
      const randomCategoryNumber = generateRandomCategoryNumber();
      if (this.#validateCategoryNumberInWeek(randomCategoryNumber, weeklyCategoryNumbers)) {
        weeklyCategoryNumbers.push(randomCategoryNumber);
      }
    }
    return weeklyCategoryNumbers;
  }

  #validateCategoryNumberInWeek(randomCategoryNumber, weeklyCategoryNumbers) {
    const count = weeklyCategoryNumbers.filter((number) => number === randomCategoryNumber).length;
    return count < CONDITION.max_duplication_category;
  }
}

export default RecommendMachine;
