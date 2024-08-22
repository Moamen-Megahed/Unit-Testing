export const add = (a: number, b: number) => a + b;

export const subtract = (a: number, b: number) => a - b;

export const reverseString = (str: string) => str.split("").reverse().join("");

export const isPalindrome = (str: string) => {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
};

export const findMax = (arr: number[]): number => Math.max(...arr);

export const filterByLength = (arr: string[], length: number): string[] => {
  return arr.filter((str) => str.length > length);
};
export const capitalizeWords = (str: string) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
