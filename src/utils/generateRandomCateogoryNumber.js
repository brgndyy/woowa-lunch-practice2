import { Random } from '@woowacourse/mission-utils';
import CONDITION from '../constants/conditions/condition.js';

const generateRandomCategoryNumber = () => {
  return Random.pickNumberInRange(CONDITION.min_category_num, CONDITION.max_category_num);
};

export default generateRandomCategoryNumber;
