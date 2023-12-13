import OutputView from './views/OutputView.js';
import asyncFunctionHandlerWithError from './utils/asyncFunctionHandlerWithError.js';
import InputView from './views/InputView.js';
import CoachNameValidator from './validator/CoachNameValidator.js';

class App {
  #coachNames;

  async play() {
    this.#printStartMessage();
    await asyncFunctionHandlerWithError(this.#readCoachNames, this);
  }

  #printStartMessage() {
    OutputView.printStartMessage();

    OutputView.divideLine();
  }

  async #readCoachNames() {
    this.#coachNames = await InputView.readCoachNames();
    CoachNameValidator.validateCoachNames(this.#coachNames);
  }
}

export default App;
