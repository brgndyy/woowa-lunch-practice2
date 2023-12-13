import deepFreeze from '../../utils/deepFreeze.js';

const CONDITION = deepFreeze({
  min_coach_length: 2,
  max_coach_length: 5,
  min_coach_name_length: 2,
  max_coach_name_length: 4,
});

export default CONDITION;
