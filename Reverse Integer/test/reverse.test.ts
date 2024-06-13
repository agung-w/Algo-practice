import { expect, test } from "@jest/globals";
import { reverseInteger } from "../reverse";
test("123 -> 321", () => {
  expect(reverseInteger(123)).toBe(321);
});

test("-123 -> -321", () => {
  expect(reverseInteger(-123)).toBe(-321);
});

test("120 -> 21", () => {
  expect(reverseInteger(120)).toBe(21);
});
