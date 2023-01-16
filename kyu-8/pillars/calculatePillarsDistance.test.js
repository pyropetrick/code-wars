const calculatePillarsDistance = require("./calculatePillarsDistance");

describe("Calculate distance between the first and the last pillar", () => {
  test("If pillars: 1 ", () => {
    expect(calculatePillarsDistance(1, 10, 10)).toBe(0);
  });
  test("If pillars: 2", () => {
    expect(calculatePillarsDistance(2, 15, 10)).toBe(1500);
  });
  test("If pllars: 11", () => {
    expect(calculatePillarsDistance(11, 15, 30)).toBe(15270);
  });
});
