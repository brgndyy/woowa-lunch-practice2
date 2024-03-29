import { Console } from '@woowacourse/mission-utils';
import PROGRESS_MESSAGE from '../constants/messages/progressMessage.js';
import DELIMITER from '../constants/delimiters/delimiter.js';

const InputView = {
  async readCoachNames() {
    const coachNames = await Console.readLineAsync(PROGRESS_MESSAGE.read_coach_names);

    return coachNames.split(DELIMITER.comma).map((name) => name.trim());
  },

  async readUnsuitableFoods(coach) {
    const unsuitableFoods = await Console.readLineAsync(
      PROGRESS_MESSAGE.read_unsuitable_foods(coach),
    );

    return unsuitableFoods.split(DELIMITER.comma).map((food) => food.trim());
  },
};

export default InputView;
