"use strict";

/**
 * File: stdDev.js
 * Author: Vanderci Curvelo Junior
 * Description: implementation of Standard Deviation calculation
 * run on nodejs
 * Data: 13/12/2020
 */

import { variance } from "./variance";

export const stdDev = (input) => Math.sqrt(variance(input));
