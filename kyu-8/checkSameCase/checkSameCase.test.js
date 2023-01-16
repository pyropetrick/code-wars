const checkSameCase = require("./checkSameCase");

describe("check case", () => {
  test("a and b  case equal", () => {
    expect(checkSameCase("a", "b")).toBe(1);
  });
  test("A and B case equal", () => {
    expect(checkSameCase("A", "B")).toBe(1);
  });
  test("a and B case not equal", () => {
    expect(checkSameCase("a", "B")).toBe(0);
  });
  test("a is not a letter", () => {
    expect(checkSameCase("*", "b")).toBe(-1);
  });
  test("b is not a letter", () => {
    expect(checkSameCase("V", "_")).toBe(-1);
  });
  test("b is not characters", () => {
    expect(checkSameCase("a", undefined)).toBe(-1);
  });
});
