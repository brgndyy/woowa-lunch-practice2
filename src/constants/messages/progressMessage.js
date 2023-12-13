import deepFreeze from '../../utils/deepFreeze.js';

const PROGRESS_MESSAGE = deepFreeze({
  start: '점심 메뉴 추천을 시작합니다.',
  read_coach_names: '코치의 이름을 입력해 주세요. (, 로 구분)\n',
  read_unsuitable_foods: (name) => `${name}(이)가 못 먹는 메뉴를 입력해 주세요.\n`,
  result_start: '메뉴 추천 결과입니다.',
  result_end: '추천을 완료했습니다.',
});

export default PROGRESS_MESSAGE;
