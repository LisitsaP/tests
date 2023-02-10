const mapArrToString = require("./mapArrToString");

describe(mapArrToString, () => {
  test("Корректное значение", () => {
    expect(mapArrToString([1, 2, 3])).toEqual(["1", "2", "3"]);
  });
  test("Лишние не точные значения", () => {
    expect(mapArrToString([1, 2, undefined, 3, null])).toEqual(["1", "2", "3"]);
  });
  test("Пустой массив", () => {
    expect(mapArrToString([])).toEqual([]);
  });
  test("Неравенство", () => {
    expect(mapArrToString([1, 2, 3])).not.toEqual(["1", "2", "3", "4"]);
  });
});
