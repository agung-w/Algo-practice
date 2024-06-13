import { expect, test, describe } from "@jest/globals";
import { replaceWords } from "./replace-words";

describe("test", () => {
  test("replaceWords([cat, bat, rat],the cattle was rattled by the battery)).toBe(the cat was rat by the bat);", () => {
    expect(
      replaceWords(
        ["cat", "bat", "rat"],
        "the cattle was rattled by the battery"
      )
    ).toBe("the cat was rat by the bat");
  });
  test("replaceWords([a,b,c],aadsfasf absbs bbab cadsfafs)).toBe(a a b c)", () => {
    expect(replaceWords(["a", "b", "c"], "aadsfasf absbs bbab cadsfafs")).toBe(
      "a a b c"
    );
  });
});
