import { Console } from '@woowacourse/mission-utils';
import DELIMITER from '../constants/delimiters/delimiter.js';
import PROGRESS_MESSAGE from '../constants/messages/progressMessage.js';

const OutputView = {
  printStartMessage() {
    Console.print(PROGRESS_MESSAGE.start);
  },

  printTotalRecommendResult(totalResult) {
    // 중복되지 않는 요일 목록 추출
    const days = [...new Set(totalResult.map((result) => result.day))];

    // 중복되지 않는 코치 목록 추출
    const coaches = [...new Set(totalResult.map((result) => result.name))];

    // 헤더 줄 생성
    const headerLine = `[ 구분 | ${days.join(' | ')} ]`;

    // 카테고리 줄 생성
    const categories = [];
    days.forEach((day) => {
      const { category } = totalResult.find((result) => result.day === day);
      categories.push(category);
    });
    const categoryLine = `[ 카테고리 | ${categories.join(' | ')} ]`;

    // 코치별 메뉴 줄 생성
    const coachLines = coaches.map((coachName) => {
      const menus = days.map((day) => {
        const menu = totalResult.find((result) => result.day === day && result.name === coachName)
          .foodHistory[0];
        return menu;
      });
      return `[ ${coachName} | ${menus.join(' | ')} ]`;
    });

    // 결과 출력
    Console.print('메뉴 추천 결과입니다.');
    Console.print(headerLine);
    Console.print(categoryLine);
    coachLines.forEach((coachLine) => Console.print(coachLine));
    Console.print('');
    Console.print('추천을 완료했습니다.');
  },

  printErrorMessage(message) {
    Console.print(message);
  },

  divideLine() {
    Console.print(DELIMITER.space);
  },
};

export default OutputView;
