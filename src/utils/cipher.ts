// Vigenère cipher encryption
export const vigenereEncrypt = (text: string, keyword: string) => {
    let encryptedText = '';
    let keywordIndex = 0;

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (/[a-zA-Z]/.test(char)) {
            const shift = keyword[keywordIndex % keyword.length].toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
            const base = char === char.toLowerCase() ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
            encryptedText += String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26) + base);
            keywordIndex++;
        } else {
            encryptedText += char;
        }
    }

    return encryptedText;
};

// Vigenère cipher decryption
export const vigenereDecrypt = (text: string, keyword: string) => {
    let decryptedText = '';
    let keywordIndex = 0;

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (/[a-zA-Z]/.test(char)) {
            const shift = keyword[keywordIndex % keyword.length].toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
            const base = char === char.toLowerCase() ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
            decryptedText += String.fromCharCode(((char.charCodeAt(0) - base - shift + 26) % 26) + base);
            keywordIndex++;
        } else {
            decryptedText += char;
        }
    }
    return decryptedText;
};