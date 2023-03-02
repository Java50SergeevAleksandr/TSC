"use strict";
const FIRST_SYMBOL = "a".charCodeAt(0);
const LAST_SYMBOL = "z".charCodeAt(0);
const RANGE = LAST_SYMBOL - FIRST_SYMBOL + 1;
function shiftRound(str, shift) {
    //shift any positive number
    //adds "shift" to ASCII codes of lower case letters
    //if the shifted code will be greater than ASCII code 'z'
    //
    //the code should be begun from ASCII code 'a'
    //source letter 'a' will be 'c' if "shift" == 2
    //source letter 'z' will be 'b' if shift ==2
    //example: shiftRound("aabx!", 4) => ("eefb!")
    return cipherDecipher(str, shift);
}
function unshiftRound(str, shift) {
    //subtracts "shift" from ASCII codes of lower case letters
    //if the shifted code will be less than ASCII code 'a'
    // the code should be begun from ASCII code 'z'
    //source letter 'c' will be 'a' if "shift" == 2
    //source letter 'b' will be 'z' if shift ==2
    //example: unshiftRound("eefb!", 4) => ("aabx!")
    return cipherDecipher(str, -shift);
}
function cipherDecipher(str, shift) {
    return Array.from(str).map(val => {
        return checkLetter(val) ? shiftLetter(val, shift) : val;
    }).join('');
}
function checkLetter(letter) {
    return (FIRST_SYMBOL <= letter.charCodeAt(0) && letter.charCodeAt(0) <= LAST_SYMBOL) ? true : false;
}
function shiftLetter(val, shift) {
    let code = val.charCodeAt(0) - FIRST_SYMBOL;
    let newCode = (code + shift) % RANGE;
    if (newCode < 0) {
        newCode = RANGE + newCode;
    }
    return String.fromCharCode(newCode + FIRST_SYMBOL);
}
console.log(shiftRound("aabx!", 4));
console.log(unshiftRound("eefb!", 4));
//# sourceMappingURL=app.js.map