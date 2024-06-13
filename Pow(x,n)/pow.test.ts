import { expect, test, describe } from "@jest/globals";
import { pow } from "./pow";

describe("test", () => {
  test("expect(pow(2.0, 10)).toBe(1024)", () => {
    expect(pow(2.0, 10)).toBe(1024);
  });
  test("expect(pow(2.1, 3)).toBe(9.261)", () => {
    expect(pow(2.1, 3)).toBe(9.261);
  });
  test("expect(pow(2.0, -2)).toBe(0.25)", () => {
    expect(pow(2.0, -2)).toBe(0.25);
  });
});
