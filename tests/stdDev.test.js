import { stdDev } from "../src/stdDev";

describe("Standard Deviation Calculation", () => {
  it("should return 1.80277563773", () => {
    const input = [5, 8, 10, 7];
    expect(stdDev(input)).toBeCloseTo(1.80277563773, 5);
  });
  it("should return 0.27978581397269886", () => {
    const input = [
      0.0405881617661199,
      0,
      0,
      0,
      0.001055943224048006,
      -0.0010555184034979348,
      0.1682459563811971,
      0.0858590161630376,
      0,
      0,
      0.7491261014974248,
      -0.7491261014974248,
      0,
      0,
      0,
      -0.013998296348040284,
      0.02025569674967076,
      0.0000016248459613343869,
      0,
      0.00009227981374315686,
      0.7844808100740832,
      0,
    ];
    expect(stdDev(input)).toBeCloseTo(0.27978581397269886, 8);
  });
});
