import { isPositiveNumber } from "../src";

const value = 1;

const result = {
  value,
  isPositiveNumber: isPositiveNumber(value),
};

console.log(result);
