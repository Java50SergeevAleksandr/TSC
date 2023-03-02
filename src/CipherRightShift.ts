import { CipherImpl } from "./CipherDecipher";
export class CipherRightShift extends CipherImpl {    
    //ciphering right shift ' ' + shift
    //deciphering left shift '~' - shift
    constructor(shift: number) {
        super(Math.abs(shift), "right");
    }
}