import { isPositiveNumber } from "@/src/index";

const value = 2;

const result = {
  value,
  isPositiveNumber: isPositiveNumber(value),
};

console.log(result);
