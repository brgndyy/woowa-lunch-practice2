import deepFreeze from '../../utils/deepFreeze.js';

const ERROR_MESSAGES = deepFreeze({
  invalid_coach_length: '총 코치는 2명 이상 5명 이하여야해요!',
  invalid_coach_name_length: '코치 이름은 최소 2글자 이상, 4글자 이하여야합니다!',
  have_space_name: '이름에 공백이 포함되면 안돼요!',
});

export default ERROR_MESSAGES;
