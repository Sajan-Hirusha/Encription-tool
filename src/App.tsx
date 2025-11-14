import { useState } from 'react';
import { Lock, Unlock, RefreshCw, Copy } from 'lucide-react';
import HeadSection from './Components/HeadSection/HeadSection.tsx';
import Footer from './Components/Footer/Footer.tsx';

// Vigenère cipher encryption
const vigenereEncrypt = (text: string, keyword: string) => {
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
const vigenereDecrypt = (text: string, keyword: string) => {
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


function App() {
    const [text, setText] = useState('');
    const [keyword, setKeyword] = useState('');
    const [result, setResult] = useState('');
    const [mode, setMode] = useState<'encrypt' | 'decrypt'>('encrypt');

    const handleProcess = () => {
        if (!text || !keyword) return;
        const processed = mode === 'encrypt' ? vigenereEncrypt(text, keyword) : vigenereDecrypt(text, keyword);
        setResult(processed);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(result);
    };

    const handleSwitch = () => {
        setMode(mode === 'encrypt' ? 'decrypt' : 'encrypt');
        setText('');
        setResult('');
    };

    return (
        <div>
            <HeadSection />

            <div className="m-20 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
                <div className="max-w-2xl mx-auto">
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <div className="flex items-center justify-between mb-8">
                            <h1 className="text-3xl font-bold text-gray-800">
                                Vigenere Cipher
                            </h1>
                            <button
                                onClick={handleSwitch}
                                className="font-bold flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-100 text-indigo-600 hover:bg-indigo-200 transition-colors"
                            >
                                <RefreshCw size={20} />
                                Switch To {mode === 'encrypt' ? 'Decrypt' : 'Encrypt'}
                            </button>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Enter Text
                                </label>
                                <textarea
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    rows={4}
                                    placeholder={`Enter text to ${mode}...`}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Keyword
                                </label>
                                <input
                                    type="text"
                                    value={keyword}
                                    onChange={(e) => setKeyword(e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="Enter encryption/decryption keyword"
                                />
                            </div>

                            <button
                                onClick={handleProcess}
                                className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors"
                            >
                                {mode === 'encrypt' ? <Lock size={20} /> : <Unlock size={20} />}
                                {mode === 'encrypt' ? 'Encrypt' : 'Decrypt'}
                            </button>

                            {result && (
                                <div className="mt-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Result
                                    </label>
                                    <div className="relative">
                    <textarea
                        value={result}
                        readOnly
                        className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg"
                        rows={4}
                    />
                                        <button
                                            onClick={handleCopy}
                                            className="absolute right-2 top-2 p-2 text-gray-500 hover:text-gray-700"
                                            title="Copy to clipboard"
                                        >
                                            <Copy size={20} />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="mt-8 text-sm text-gray-600">
                            <h2 className="font-semibold mb-2">How it works:</h2>
                            <p>
                                The Vigenère cipher uses a keyword to shift letters in the text based on their position in the alphabet. It is a polyalphabetic cipher, meaning that each letter in the plaintext is shifted by a varying amount depending on the corresponding letter in the keyword. To decrypt, the process is reversed using the same keyword.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
