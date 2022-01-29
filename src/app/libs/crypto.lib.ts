import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CryptoLib {

  // public async encrypt() {
  //   const enc = new TextEncoder();
  //   const encodedMessage = enc.encode('hello');
  //   const keyPair = window.crypto.subtle.generateKey({
  //       name: "RSASSA-PKCS1-v1_5",
  //       modulusLength: 4096,
  //       publicExponent: new Uint8Array([1, 0, 1]),
  //       hash: "SHA-256"
  //     },
  //     true,
  //     ["sign", "verify"]
  //   );

  //   const { privateKey, publicKey } = await keyPair;

  //   const encryptedText = await window.crypto.subtle.encrypt({ name: "RSA-OAEP" }, publicKey, encodedMessage);

  //   console.log(encryptedText);

  //   return encryptedText;
  // }

  // public async decrypt() {
  //   const dec = new TextDecoder();
  //   const decryptedText = await window.crypto.subtle.decrypt({ name: "RSA-OAEP" }, privateKey, encryptedText);
  //   console.log(decryptedText);
  //   console.log(dec.decode(decryptedText));
  // }
}
