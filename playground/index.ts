import { isPositiveNumber } from "../src";

const value = 3;

const result = {
  value,
  isPositiveNumber: isPositiveNumber(value),
};

console.log(result);
