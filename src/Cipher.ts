export interface Cipher {
    cipher(plainText: string): string;
    decipher(cipherText: string): string;
}