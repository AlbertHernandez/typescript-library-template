import { isPositiveNumber } from "../../src";

describe("isPositiveNumber", () => {
  test("when is executed with a positivsse number should return true", () => {
    expect(isPositiveNumber(1)).toBeTruthy();
  });

  test("when is executed with a negative number should return false", () => {
    expect(isPositiveNumber(-1)).toBeFalsy();
  });

  test("when is executed with 0 should return false", () => {
    expect(isPositiveNumber(0)).toBeFalsy();
  });
});
