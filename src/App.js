import OutputView from './views/OutputView.js';

class App {
  async play() {
    this.#printStartMessage();
  }

  #printStartMessage() {
    OutputView.printStartMessage();
  }
}

export default App;
