const fortune = (f, p, c, n, i) => {
  if (f <= 0 || (n === 0 && f < 0)) return false;
  if ((f >= 0 && n <= 1) || f === c) return true;
  return fortune(
    Math.round((f += (p / 100) * f - c)),
    p,
    Math.round((c += c * (i / 100))),
    (n -= 1),
    i
  );
};
