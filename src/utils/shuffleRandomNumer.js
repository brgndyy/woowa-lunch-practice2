import { Random } from '@woowacourse/mission-utils';

const getShuffleNum = (length) => {
  const numArr = Array.from({ length }, (_, index) => index + 1);

  return Random.shuffle(numArr)[0];
};

export default getShuffleNum;
