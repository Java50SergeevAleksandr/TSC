const FIRST_SYMBOL: number = "a".charCodeAt(0);
const LAST_SYMBOL: number = "z".charCodeAt(0);
const RANGE: number = LAST_SYMBOL - FIRST_SYMBOL + 1;

function shiftRound(str: string, shift: number): string {
    //shift any positive number
    //adds "shift" to ASCII codes of lower case letters
    //if the shifted code will be greater than ASCII code 'z'
    //
    //the code should be begun from ASCII code 'a'
    //source letter 'a' will be 'c' if "shift" == 2
    //source letter 'z' will be 'b' if shift ==2
    //example: shiftRound("aabx!", 4) => ("eefb!")
    return Array.from(str).map(val => {
        return checkLetter(val) ? shiftLetter(val, shift) : val
    }).join('');
}

function unshiftRound(str: string, shift: number): string {
    //subtracts "shift" from ASCII codes of lower case letters
    //if the shifted code will be less than ASCII code 'a'
    // the code should be begun from ASCII code 'z'
    //source letter 'c' will be 'a' if "shift" == 2
    //source letter 'b' will be 'z' if shift ==2
    //example: unshiftRound("eefb!", 4) => ("aabx!")
    return shiftRound(str, -shift);
}


function checkLetter(letter: string): boolean {
    return (FIRST_SYMBOL <= letter.charCodeAt(0) && letter.charCodeAt(0) <= LAST_SYMBOL) ? true : false;
}
function shiftLetter(val: string, shift: number): string {
    let code: number = val.charCodeAt(0) - FIRST_SYMBOL;
    let newCode: number = (code + shift) % RANGE;
    if (newCode < 0) {
        newCode = RANGE + newCode;
    }
    return String.fromCharCode(newCode + FIRST_SYMBOL);
}

console.log(shiftRound("aabx!", 4));
console.log(unshiftRound("eefb!", 4));

