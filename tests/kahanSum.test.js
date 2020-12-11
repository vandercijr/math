import { kahanSum } from "../src/kahanSum";

describe("Kahan Summation Algorithm", () => {
  it("should return 1.0000000000000000", () => {
    const input = [1.0, 1.1102230246251565e-16, -1.1102230246251565e-16];
    expect(kahanSum(input)).toBe(1.0);
  });
});
