import { range } from "./range";

describe("range generator function", () => {
  test("should generate numbers from start to end with a default step of 1", () => {
    const result = Array.from(range(0, 5));
    expect(result).toEqual([0, 1, 2, 3, 4]);
  });

  test("should generate numbers from start to end with a custom step", () => {
    const result = Array.from(range(0, 10, 2));
    expect(result).toEqual([0, 2, 4, 6, 8]);
  });

  test("should return an empty array if the start is equal to the end", () => {
    const result = Array.from(range(5, 5));
    expect(result).toEqual([]);
  });

  test("should return an empty array if the start is greater than the end and step is positive", () => {
    const result = Array.from(range(5, 0));
    expect(result).toEqual([]);
  });
});
