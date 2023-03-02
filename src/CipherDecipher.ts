import { Cipher } from "./Cipher";

const FIRST_SYMBOL: number = " ".charCodeAt(0);
const LAST_SYMBOL: number = "~".charCodeAt(0);
const RANGE: number = LAST_SYMBOL - FIRST_SYMBOL + 1;

export class CipherImpl implements Cipher {

    protected constructor(private shift: number, private shiftDirection: "left" | "right") { }
    cipher(plainText: string): string {
        const mapperCipher: Function = this.shiftDirection == "left" ? this.getFunctionLeftShift() : this.getFunctionRightShift();
        return this.shiftFromMapper(plainText, mapperCipher, this.shift);
    }
    decipher(cipherText: string): string {
        const mapperDecipher: Function = this.shiftDirection == "left" ? this.getFunctionRightShift() : this.getFunctionLeftShift();
        return this.shiftFromMapper(cipherText, mapperDecipher, this.shift);
    }
    private getFunctionLeftShift() {
        return (symb: string, shift: number): string => {
            const actualShift: number = (LAST_SYMBOL - symb.charCodeAt(0) + shift) % RANGE;
            return String.fromCharCode(LAST_SYMBOL - actualShift);
        }
    }
    private getFunctionRightShift() {
        return (symb: string, shift: number): string => {
            const actualShift: number =
                (symb.charCodeAt(0) - FIRST_SYMBOL + shift) % RANGE;
            return String.fromCharCode(FIRST_SYMBOL + actualShift);
        }
    }
    private shiftFromMapper(str: string, mapper: Function, shift: number) {
        return Array.from(str).map(symb => {
            return this.checkLetter(symb) ? mapper(symb, Math.abs(shift)) : symb;
        }).join('');
    }
    private checkLetter(letter: string): boolean {
        return (FIRST_SYMBOL <= letter.charCodeAt(0) && letter.charCodeAt(0) <= LAST_SYMBOL) ? true : false;
    }
}