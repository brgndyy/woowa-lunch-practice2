import OutputView from './views/OutputView.js';
import asyncFunctionHandlerWithError from './utils/asyncFunctionHandlerWithError.js';
import InputView from './views/InputView.js';
import CoachNameValidator from './validator/CoachNameValidator.js';
import UnsuitableFoodsValidator from './validator/UnsuitableFoodsValidator.js';
import DELIMITER from './constants/delimiters/delimiter.js';

class App {
  #coachNames;

  #totalCoachInfo = [];

  async play() {
    this.#printStartMessage();
    await asyncFunctionHandlerWithError(this.#readCoachNames, this);
    await asyncFunctionHandlerWithError(this.#readUnsuitableFood, this);
  }

  #printStartMessage() {
    OutputView.printStartMessage();

    OutputView.divideLine();
  }

  async #readCoachNames() {
    this.#coachNames = await InputView.readCoachNames();
    CoachNameValidator.validateCoachNames(this.#coachNames);

    OutputView.divideLine();
  }

  async #readUnsuitableFood() {
    await this.#coachNames.reduce(async (previousPromise, coach) => {
      await previousPromise;
      await asyncFunctionHandlerWithError(() => this.#readValidUnsuitableFood(coach), this);
    }, Promise.resolve());
  }

  async #readValidUnsuitableFood(coach) {
    let unsuitableFoods = await InputView.readUnsuitableFoods(coach);
    UnsuitableFoodsValidator.validateUnsuitableFoods(unsuitableFoods);
    unsuitableFoods = unsuitableFoods.filter((food) => food.trim() !== DELIMITER.none);
    this.#totalCoachInfo.push({ name: coach, unsuitableFoods });

    OutputView.divideLine();
  }
}

export default App;
