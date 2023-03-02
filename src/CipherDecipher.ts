import { Cipher } from "./Cipher";

const FIRST_SYMBOL: number = " ".charCodeAt(0);
const LAST_SYMBOL: number = "~".charCodeAt(0);
const RANGE: number = LAST_SYMBOL - FIRST_SYMBOL + 1;

export class CipherImpl implements Cipher {
    declare protected mapperCipher: Function;
    declare protected mapperDecipher: Function;
    protected constructor(private shift: number) {
        this.getMapper();
    }
    cipher(plainText: string): string {
        return this.shiftFromMapper(plainText, this.mapperCipher, this.shift);
    }
    decipher(cipherText: string): string {
        return this.shiftFromMapper(cipherText, this.mapperDecipher, this.shift);
    }
    protected getMapper() {
        this.mapperCipher = this.getFunctionLeftShift();
        this.mapperDecipher = this.getFunctionRightShift();
    }
    protected getFunctionLeftShift() {
        return (symb: string, shift: number): string => {
            const actualShift: number = (LAST_SYMBOL - symb.charCodeAt(0) + shift) % RANGE;
            return String.fromCharCode(LAST_SYMBOL - actualShift);
        }
    }
    protected getFunctionRightShift() {
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