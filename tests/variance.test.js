import { variance } from "../src/variance";

describe("Variance Calculation", () => {
  it("should return 3.25", () => {
    const input = [5, 8, 10, 7];
    expect(variance(input)).toBe(3.25);
  });
});
