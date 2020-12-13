import { stdDev } from "../src/stdDev";

describe("Standard Deviation Calculation", () => {
  it("should return 1.80277563773", () => {
    const input = [5, 8, 10, 7];
    expect(stdDev(input)).toBeCloseTo(1.80277563773, 5);
  });
});
