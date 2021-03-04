import format from "date-fns/format";
import distanceInWordsToNow from "date-fns/distance_in_words_to_now";

export const noop = () => {};

export const convertObjToArray = obj =>
  Object.keys(obj).map(key => Object.assign(obj[key], { id: key }));

export const timestampInDateStr = timestamp =>
  format(new Date(timestamp * 1000), `YYYY-MM-DD`);

export const timestampInWordsToNow = timestamp =>
  // const nowTimestamp = new Date().getTime() / 1000;
  // const past = timestamp - nowTimestamp < 0;
  // const suffix = past ? `ago` : `to go`;
  // return `${distanceInWordsToNow(new Date(timestamp * 1000))} ${suffix}`;
  distanceInWordsToNow(new Date(timestamp * 1000))
;
