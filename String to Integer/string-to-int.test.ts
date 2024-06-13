import { expect, test, describe } from "@jest/globals";
import { stringToInteger } from "./string-to-int";

describe("test", () => {
  test("42 => 42", () => {
    expect(stringToInteger("42")).toBe(42);
  });
  test("-042 -> -42", () => {
    expect(stringToInteger(" -042")).toBe(-42);
  });
  test("-420 -> -420", () => {
    expect(stringToInteger(" -420")).toBe(-420);
  });
  test("-00420 -> -420", () => {
    expect(stringToInteger(" -00420")).toBe(-420);
  });
  test("1337c0d3 -> 1337", () => {
    expect(stringToInteger("1337c0d3")).toBe(1337);
  });
  test("0-1 -> 0", () => {
    expect(stringToInteger("0-1")).toBe(0);
  });
  test("words and 987 -> 0", () => {
    expect(stringToInteger("words and 987")).toBe(0);
  });
  test("2147483648 => 2147483647", () => {
    expect(stringToInteger("2147483648")).toBe(2147483647);
  });
  test("-2147483648 => -2147483647", () => {
    expect(stringToInteger("-2147483648")).toBe(-2147483647);
  });
});
