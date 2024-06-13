import { expect, test } from "@jest/globals";
import { zigZagConversion } from "./zigzag";
test("PAYPALISHIRING ROW : 3 -> PAHNAPLSIIGYIR", () => {
  expect(zigZagConversion("PAYPALISHIRING", 3)).toBe("PAHNAPLSIIGYIR");
});
test("PAYPALISHIRING ROW : 4 -> PINALSIGYAHRPI", () => {
  expect(zigZagConversion("PAYPALISHIRING", 4)).toBe("PINALSIGYAHRPI");
});
