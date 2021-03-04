/* globals test, expect */
import { convertObjToArray, timestampInDateStr } from "./utils";

test(`converts RFP object to array of objects`, () => {
  const input = {
    "-K_my_id_1": { a: `b` },
    "-K_my_id_2": { c: `d` },
  };
  const output = [{ id: `-K_my_id_1`, a: `b` }, { id: `-K_my_id_2`, c: `d` }];
  expect(convertObjToArray(input)).toEqual(output);
});

test(`converts unix timestamp to ISO date string`, () => {
  const input = 1509139789;
  const output = `2017-10-27`;
  expect(timestampInDateStr(input)).toEqual(output);
});
