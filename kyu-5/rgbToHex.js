const rgbToHex = (r, g, b) =>
  [r, g, b]
    .map((color) => {
      if (color < 0) return 0;
      if (color > 255) return 255;
      return color;
    })
    .map((color) =>
      color.toString(16).length === 1
        ? `0${color.toString(16).toUpperCase()}`
        : color.toString(16).toUpperCase()
    )
    .join("");

module.exports = rgbToHex;
