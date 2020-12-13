"use strict";

/**
 * File: kahanSum.js
 * Author: Vanderci Curvelo Junior
 * Description: implementation of Kahan summation algorithm
 * run on nodejs
 * Data: 10/12/2020
 */
// https://rosettacode.org/wiki/Kahan_summation#Python:_Arbitrary_precision_Decimal

/*
float kahanSum(float *nums, int count) {
  float sum = 0.0f;
  float c = 0.0f;
  float t, y;
  int i;
  for (i = 0; i < count; ++i) {
      y = nums[i] - c;
      t = sum + y;
      c = (t - sum) - y;
      sum = t;
  }
  return sum;
}*/

export const kahanSum = (input) => {
  let sum = 0.0,
    c = 0.0,
    t,
    y;

  for (let i = 0, s = input.length; i < s; i++) {
    y = input[i] - c;
    t = sum + y;
    c = t - sum - y;
    sum = t;
  }
  return sum;
};
