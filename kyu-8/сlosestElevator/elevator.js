const elevator = (left, right, call) => {
  const stepRight = Math.abs(call - right);
  const stepLeft = Math.abs(call - left);
  return stepRight <= stepLeft ? "right" : "left";
};

module.exports = elevator;
