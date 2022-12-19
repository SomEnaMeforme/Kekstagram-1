import { MAX_COMMENT_LENGTH } from './consts.js';

export const getRandomInt = (a, b) => {
  const min = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const max = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  return Math.round(Math.random() * (max - min) + min);
};
export const getRandomArrayElement = (array) => array[getRandomInt(0, array.length - 1)];

export const percentageConvertToDouble = (percentageCount) => percentageCount * 0.01;

export const checkCommentLength = (comment) => comment.length <= MAX_COMMENT_LENGTH;

export const shuffleArray = (arr) => arr.map((el) => [Math.random(), el]).sort((el1, el2) => el1[0] - el2[0]).map((el) => el[1]);

export const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};
