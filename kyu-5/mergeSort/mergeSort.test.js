const mergeSort = require("./mergeSort");

describe("Merge sort", () => {
  test("If args is empty", () => {
    expect(mergeSort([], [])).toEqual([]);
  });
  test("If one array with value, second array empty", () => {
    expect(mergeSort([], [1, 2])).toEqual([1, 2]);
  });
  test("If args have normal values", () => {
    expect(mergeSort([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])).toEqual([
      1, 2, 3, 3, 4, 4, 5, 5, 6, 7,
    ]);
  });
  test("If args not equal", () => {
    expect(mergeSort([1, 2, 3], [4])).toEqual([1, 2, 3, 4]);
  });
});
