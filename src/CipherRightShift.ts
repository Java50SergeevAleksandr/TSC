import { CipherImpl } from "./CipherDecipher";
export class CipherRightShift extends CipherImpl {    
    //ciphering right shift ' ' + shift
    //deciphering left shift '~' - shift
    constructor(shift: number) {
        super(shift);
    }
    getMapper() {
        this.mapperCipher = this.getFunctionRightShift();
        this.mapperDecipher = this.getFunctionLeftShift();
    }
}