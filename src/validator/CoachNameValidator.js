import CONDITION from '../constants/conditions/condition.js';
import AppError from '../error/AppError.js';
import ERROR_MESSAGES from '../constants/messages/errorMessage.js';
import DELIMITER from '../constants/delimiters/delimiter.js';

class CoachNameValidator {
  static validateCoachNames(coachNames) {
    CoachNameValidator.validateCoachLength(coachNames);
    CoachNameValidator.validateIndividualCoachNames(coachNames);
  }

  static validateCoachLength(coachNames) {
    if (
      coachNames.length < CONDITION.min_coach_length ||
      coachNames.length > CONDITION.max_coach_length
    ) {
      throw new AppError(ERROR_MESSAGES.invalid_coach_length);
    }
  }

  static validateIndividualCoachNames(coachNames) {
    coachNames.forEach((name) => {
      if (name.includes(DELIMITER.space)) {
        throw new AppError(ERROR_MESSAGES.have_space_name);
      }

      if (
        name.length < CONDITION.min_coach_name_length ||
        name.length > CONDITION.max_coach_name_length
      ) {
        throw new AppError(ERROR_MESSAGES.invalid_coach_name_length);
      }
    });
  }
}

export default CoachNameValidator;
