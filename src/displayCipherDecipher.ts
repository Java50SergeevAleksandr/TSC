import { Cipher } from "./Cipher";
export function displayCipherDecipher(cipher: Cipher, text: string) {
    const cipherResult = cipher.cipher(text);
    console.log(`ciphering of text ${text} gives cipher ${cipherResult}
     deciphering gives result ${cipher.decipher(cipherResult)}`)
}