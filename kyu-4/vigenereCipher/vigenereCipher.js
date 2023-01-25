class VigenèreCipher {
  #key;
  #alphabet;
  #result;
  #alphabetLength;
  constructor(key, alphabet) {
    this.#key = key;
    this.#alphabet = alphabet;
    this.#alphabetLength = alphabet.length;
  }
  isAlphabetLetter(letter) {
    return letter.length === 1 && this.#alphabet.includes(letter);
  }
  encode(str) {
    this.#result = "";
    for (let i = 0, j = 0; i < str.length; i++) {
      const letter = str.at(i);
      const letterKey = this.#key[i % this.#key.length];
      if (this.isAlphabetLetter(letter)) {
        this.#result += this.#alphabet.at(
          (this.#alphabet.indexOf(letter) + this.#alphabet.indexOf(letterKey)) %
            this.#alphabetLength
        );
      } else this.#result += letter;
    }
    return this.#result;
  }
  decode(str) {
    this.#result = "";
    for (let i = 0; i < str.length; i++) {
      const letter = str.at(i);
      const letterKey = this.#key[i % this.#key.length];
      if (this.isAlphabetLetter(letter)) {
        this.#result += this.#alphabet.at(
          (this.#alphabet.indexOf(letter) +
            this.#alphabetLength -
            this.#alphabet.indexOf(letterKey)) %
            this.#alphabetLength
        );
      } else this.#result += letter;
    }
    return this.#result;
  }
}

module.exports = VigenèreCipher;
