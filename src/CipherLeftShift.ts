import { CipherImpl } from "./CipherDecipher";
export class CipherLeftShift extends CipherImpl {
    //deciphering right shift ' ' + shift
    //ciphering left shift '~' - shift
    constructor(shift: number) {
        super(shift, "left");
    }
}
