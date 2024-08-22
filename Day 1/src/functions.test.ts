import {
  add,
  subtract,
  reverseString,
  isPalindrome,
  findMax,
  filterByLength,
  capitalizeWords,
} from "./functions";

test("adds 5 + 5 to equal 10", () => {
  expect(add(5, 5)).toBe(10);
});

test("subtracts 10 - 2 to equal 8", () => {
  expect(subtract(10, 2)).toBe(8);
});

test("reverses the string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("checks if string is a palindrome", () => {
  expect(isPalindrome("radar")).toBe(true);
});

test("finds the maximum number in array", () => {
  expect(findMax([1, 2, 3, 4])).toBe(4);
});

test("check the strings in the array is greater than the length", () => {
  const arr = ["Moamen", "Megahed", "Ahmed", "Mohammed"];
  expect(filterByLength(arr, 6)).toEqual(["Megahed", "Mohammed"]);
});

test("capitalize the firt letter in each word", () => {
  expect(capitalizeWords("hello from test")).toBe("Hello From Test");
});
