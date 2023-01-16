const calculatePillarsWidth = (numPill, dist, width) =>
  numPill <= 1 ? 0 : (numPill - 2) * width + (numPill - 1) * (dist * 100);

module.exports = calculatePillarsWidth;
