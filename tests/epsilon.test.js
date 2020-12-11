import { epsilon } from "../src/epsilon";

describe("Epsilon Algorithm", () => {
  it("should return 1.1102230246251565e-16", () => {
    expect(epsilon()).toBe(1.1102230246251565e-16);
  });
});
