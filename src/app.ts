//module for testing

import { CipherLeftShift } from "./CipherLeftShift";
import { CipherRightShift } from "./CipherRightShift";
import { displayCipherDecipher } from "./displayCipherDecipher";

const leftShift = new CipherLeftShift(1);
const rightShift = new CipherRightShift(1);
displayCipherDecipher(leftShift, "abcz!");
displayCipherDecipher(rightShift, "abcz!");