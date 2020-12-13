"use strict";

/**
 * File: variance.js
 * Author: Vanderci Curvelo Junior
 * Description: implementation of variance statistical calculation
 * run on nodejs
 * Data: 13/12/2020
 */
export const variance = (input) => {
  const inputSize = input.length;
  const average = input.reduce((acc, p) => acc + p, 0) / inputSize;

  let value = 0,
    sum = 0;
  for (let i = 0; i < inputSize; i++) {
    value = input[i] - average;
    sum += value * value;
  }

  return sum / inputSize;
};
