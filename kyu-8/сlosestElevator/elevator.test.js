const elevator = require("./elevator");

describe("Elevator function", () => {
  test("If the left elevator is closer to the call => left", () => {
    expect(elevator(0, 1, 0)).toBe("left");
  });
  test("If the right elevator is closer to the call => right", () => {
    expect(elevator(1, 0, 0)).toBe("right");
  });
  test("If both elevators are on the same floor => right", () => {
    expect(elevator(0, 0, 0)).toBe("right");
  });
  test("If both elevators are in equal distance from the call, should return 'right'", () => {
    expect(elevator(0, 2, 1)).toBe("right");
  });
});
