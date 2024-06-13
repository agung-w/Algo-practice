import { expect, test, describe } from "@jest/globals";
import { subArrayDivByK } from "./subarray-div-by-k";

describe("test", () => {
  test("subArrayDivByK([4, 5, 0, -2, -3, 1], 5)).toBe(7)", () => {
    expect(subArrayDivByK([4, 5, 0, -2, -3, 1], 5)).toBe(7);
  });
  test("subArrayDivByK([5], 9)).toBe(0)", () => {
    expect(subArrayDivByK([5], 9)).toBe(0);
  });
});
