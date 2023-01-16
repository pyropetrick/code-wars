const checkSameCase = (a, b) => {
  const regExpNotLetter = /[^A-Za-z]/gi;
  if (!a || !b || a.match(regExpNotLetter) || b.match(regExpNotLetter))
    return -1;
  const regExpUpperCase = /[A-Z]/g;
  const regExpLowerCase = /[a-z]/g;
  if (
    (a.match(regExpUpperCase) && b.match(regExpUpperCase)) ||
    (a.match(regExpLowerCase) && b.match(regExpLowerCase))
  )
    return 1;
  return 0;
};

module.exports = checkSameCase;
