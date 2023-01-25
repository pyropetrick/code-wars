let key = "password";
let abc = "abcdefghijklmnopqrstuvwxyz";

const VigenèreCipher = require("./vigenereCipher");
let cipher = new VigenèreCipher(key, abc);

describe("Vigenere cipher", () => {
  test("Encode test", () => {
    expect(cipher.encode("codewars")).toBe("rovwsoiv");
  });
  test("Decode test", () => {
    expect(cipher.decode("rovwsoiv")).toBe("codewars");
  });
  test("Encode with Katakana", () => {
    key = "カタカナ";
    abc =
      "アイウエオァィゥェォカキクケコサシスセソタチツッテトナニヌネノハヒフヘホマミムメモヤャユュヨョラリルレロワヲンー";
    cipher = new VigenèreCipher(key, abc);
    expect(cipher.encode("カタカナ")).toBe("タモタワ");
  });
});
