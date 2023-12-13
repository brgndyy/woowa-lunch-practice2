import CONDITION from '../constants/conditions/condition.js';
import AppError from '../error/AppError.js';
import ERROR_MESSAGES from '../constants/messages/errorMessage.js';
import ALL_FOOD from '../database/allFood.js';
import DELIMITER from '../constants/delimiters/delimiter.js';

class UnsuitableFoodsValidator {
  static validateUnsuitableFoods(unsuitableFoods) {
    if (unsuitableFoods.length > CONDITION.max_unsuitable_food_length) {
      throw new AppError(ERROR_MESSAGES.invalid_unsuitable_food_length);
    }
    UnsuitableFoodsValidator.validateValidFood(unsuitableFoods);
  }

  static validateValidFood(unsuitableFoods) {
    unsuitableFoods.forEach((food) => {
      if (food.trim() === DELIMITER.none) return;
      const foodExists = ALL_FOOD.some((menu) => menu.title === food);
      if (!foodExists) {
        throw new AppError(ERROR_MESSAGES.invalid_unsuitable_food);
      }
    });
  }
}

export default UnsuitableFoodsValidator;
