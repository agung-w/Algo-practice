import { expect, test, describe } from "@jest/globals";
import { longestPalindrom } from "./longest-palindrom";

describe("test", () => {
  test("babad => bab", () => {
    expect(longestPalindrom("babad")).toBe("bab");
  });
  test("cbbd -> bb", () => {
    expect(longestPalindrom("cbbd")).toBe("bb");
  });
  test("bb -> bb", () => {
    expect(longestPalindrom("bb")).toBe("bb");
  });
});
