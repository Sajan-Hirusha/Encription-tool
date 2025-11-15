import { useState } from 'react';
import HeadSection from './Components/HeadSection/HeadSection.tsx';
import Footer from './Components/Footer/Footer.tsx';
import CipherCard from './Components/CipherCard/CipherCard.tsx';
import { vigenereEncrypt, vigenereDecrypt } from './utils/cipher';

function App() {
    const [text, setText] = useState('');
    const [keyword, setKeyword] = useState('');
    const [result, setResult] = useState('');
    const [mode, setMode] = useState<'encrypt' | 'decrypt'>('encrypt');

    const handleProcess = () => {
        if (!text || !keyword) return;
        const processed = mode === 'encrypt'
            ? vigenereEncrypt(text, keyword)
            : vigenereDecrypt(text, keyword);
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
        <div className="min-h-screen bg-gray-900">
            <HeadSection />

            <div className="container mx-auto px-4 py-8">
                <CipherCard
                    mode={mode}
                    text={text}
                    keyword={keyword}
                    result={result}
                    onTextChange={setText}
                    onKeywordChange={setKeyword}
                    onProcess={handleProcess}
                    onCopy={handleCopy}
                    onSwitch={handleSwitch}
                />
            </div>

            <Footer />
        </div>
    );
}

export default App;