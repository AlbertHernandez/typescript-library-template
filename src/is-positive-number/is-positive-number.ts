export const isPositiveNumber = (value: number): boolean => {
  const res = Math.sign(value) === 1;
  return res;
};
