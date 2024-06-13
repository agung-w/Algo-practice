import { expect, test } from "@jest/globals";
import { medianOfTwoSortedArrays } from "./median";
test("[1,3],[2] -> 2", () => {
  expect(medianOfTwoSortedArrays([1, 3], [2])).toBe(2);
});
test("[1,2],[3,4] -> 2.5", () => {
  expect(medianOfTwoSortedArrays([1, 2], [3, 4])).toBe(2.5);
});
