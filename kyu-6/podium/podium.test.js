const podium = require("./podium");

describe("Olympiad podium", () => {
  test("If one challenger score is empty", () => {
    expect(
      podium({
        Emy: [12],
        Sandra: [],
        Sue: [0, 0],
      })
    ).toEqual({
      gold: {
        score: 12,
        players: ["Emy"],
      },
      silver: {
        score: 0,
        players: ["Sue"],
      },
    });
  });
});
