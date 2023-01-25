const rgbToHex = require("./rgbToHex");

describe("Rgb to hex transformator", () => {
  test("If black color", () => {
    expect(rgbToHex(0, 0, 0)).toBe("000000");
  });
  test("If negative color", () => {
    expect(rgbToHex(0, 0, -20)).toBe("000000");
  });
  test("If color > 255", () => {
    expect(rgbToHex(255, 255, 320)).toBe("FFFFFF");
  });
});
