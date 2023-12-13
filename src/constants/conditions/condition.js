import deepFreeze from '../../utils/deepFreeze.js';

const CONDITION = deepFreeze({
  min_coach_length: 2,
  max_coach_length: 5,
  min_coach_name_length: 2,
  max_coach_name_length: 4,
  max_unsuitable_food_length: 2,
  min_category_num: 1,
  max_category_num: 5,
  max_duplication_category: 2,
});

export default CONDITION;
