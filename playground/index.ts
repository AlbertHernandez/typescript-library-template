import { isPositiveNumber } from "@/src/index";

const value = 4;

const result = {
  value,
  isPositiveNumber: isPositiveNumber(value),
};

console.log(result);
