import { expect, test, describe } from "@jest/globals";
import { isPalindrom } from "./palindrom";

describe("test", () => {
  test("121 => true", () => {
    expect(isPalindrom(121)).toBe(true);
  });
  test("-121 -> false", () => {
    expect(isPalindrom(-121)).toBe(false);
  });
  test("10 -> false", () => {
    expect(isPalindrom(19)).toBe(false);
  });
});
