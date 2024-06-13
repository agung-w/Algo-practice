import { expect, test } from "@jest/globals";
import { twoSum } from "../two-sum";
test("[2, 7, 11, 15], 9 -> 0, 1", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
});

test("[3, 2, 4], 6 -> [1, 2]", () => {
  expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2]);
});

test("[3, 3], 6 -> [0, 1]", () => {
  expect(twoSum([3, 3], 6)).toStrictEqual([0, 1]);
});
