import { isPositiveNumber } from "../src";

const value = 9;

const result = {
  value,
  isPositiveNumber: isPositiveNumber(value),
};

console.log(result);
