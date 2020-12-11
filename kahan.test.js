describe('Kahan Summation Algorithm', () => {
  it('should return 1.0000000000000000', () => {
    expect(kahanSum(input)).toBeEqualTo(1.0000000000000)
    // expect(kahanSum(input)).toBeCloseTo(1, 1)
  })
})
