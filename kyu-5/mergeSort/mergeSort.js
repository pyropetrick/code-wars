const mergesorted = (a, b) => {
  const result = [];
  const length = a.length + b.length;
  for (let i = 0; i < length; i++) {
    if (!a.length) return [...result, ...b];
    if (!b.length) return [...result, ...a];
    if (a[0] > b[0]) {
      result.push(b[0]);
      b.splice(0, 1);
    }
    if (a[0] < b[0]) {
      result.push(a[0]);
      a.splice(0, 1);
    }
    if (a[0] === b[0]) {
      result.push(a[0], b[0]);
      b.splice(0, 1);
      a.splice(0, 1);
    }
  }
  return result;
};

module.exports = mergesorted;
