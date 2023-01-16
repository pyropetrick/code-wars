const quarterOf = require("./checkMonthQuarter");

describe("Check month quarter", () => {
  test("month in first quarter", () => {
    expect(quarterOf(1)).toBe(1);
  });
  test("month in first quarter", () => {
    expect(quarterOf(3)).toBe(1);
  });
  test("month in second quarter", () => {
    expect(quarterOf(5)).toBe(2);
  });
  test("month in second quarter", () => {
    expect(quarterOf(8)).toBe(3);
  });
  test("month in fourth quarter", () => {
    expect(quarterOf(12)).toBe(4);
  });
});
