const getTotalPoints = require("./getTotalPoints");

describe("Get total points team X", () => {
  test("If x team win ", () => {
    expect(
      getTotalPoints([
        "1:0",
        "2:0",
        "3:0",
        "4:0",
        "2:1",
        "3:1",
        "4:1",
        "3:2",
        "4:2",
        "4:3",
      ])
    ).toBe(30);
  });
  test("If x team lost ", () => {
    expect(
      getTotalPoints([
        "0:1",
        "0:2",
        "0:3",
        "0:4",
        "1:2",
        "1:3",
        "1:4",
        "2:3",
        "2:4",
        "3:4",
      ])
    ).toBe(0);
  });
});
