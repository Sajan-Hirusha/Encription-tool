import { Shield, RefreshCw, Terminal } from 'lucide-react';
import TextArea from '../TextArea/TextArea';
import KeywordInput from '../KeywordInput/KeywordInput';
import ResultDisplay from '../ResultDisplay/ResultDisplay';

interface CipherCardProps {
    mode: 'encrypt' | 'decrypt';
    text: string;
    keyword: string;
    result: string;
    onTextChange: (text: string) => void;
    onKeywordChange: (keyword: string) => void;
    onProcess: () => void;
    onCopy: () => void;
    onSwitch: () => void;
}

const CipherCard = ({
                        mode,
                        text,
                        keyword,
                        result,
                        onTextChange,
                        onKeywordChange,
                        onProcess,
                        onCopy,
                        onSwitch
                    }: CipherCardProps) => {
    return (
        <div className="max-w-4xl mx-auto">
            {/* Cyber Terminal Header */}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-t-2xl p-6 border-b border-cyan-300/30">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="flex space-x-1">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <h1 className="text-2xl font-mono font-bold text-gray-900">
                            {mode === 'encrypt' ? 'ENCRYPTION_PROTOCOL' : 'DECRYPTION_PROTOCOL'}
                        </h1>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Terminal className="text-gray-900" size={24} />
                        <span className="font-mono text-gray-900 text-sm">VIGENERE_CIPHER_v1.0</span>
                    </div>
                </div>
            </div>

            {/* Main Card */}
            <div className="bg-gray-800 rounded-b-2xl border border-cyan-500/30 shadow-2xl">
                <div className="p-8">
                    {/* Mode Switch */}
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center space-x-3">
                            <Shield className="text-cyan-400" size={32} />
                            <div>
                                <h2 className="text-xl font-mono font-bold text-white">
                                    {mode === 'encrypt' ? 'SECURE_ENCRYPT' : 'SECURE_DECRYPT'}
                                </h2>
                                <p className="text-cyan-400 text-sm font-mono">
                                    {mode === 'encrypt' ? 'ACTIVE: ENCRYPTION_MODE' : 'ACTIVE: DECRYPTION_MODE'}
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={onSwitch}
                            className="font-mono flex items-center gap-3 px-6 py-3 rounded-lg bg-cyan-900/50 text-cyan-300 hover:bg-cyan-800/70 border border-cyan-500/30 transition-all duration-300 hover:border-cyan-400/50"
                        >
                            <RefreshCw size={18} />
                            SWITCH_TO_{mode === 'encrypt' ? 'DECRYPT' : 'ENCRYPT'}
                        </button>
                    </div>

                    <div className="space-y-6">
                        {/* Input Areas */}
                        <TextArea
                            label="INPUT_TEXT"
                            value={text}
                            onChange={onTextChange}
                            placeholder={`Enter text to ${mode}...`}
                            rows={4}
                        />

                        <KeywordInput
                            value={keyword}
                            onChange={onKeywordChange}
                        />

                        {/* Process Button */}
                        <button
                            onClick={onProcess}
                            className="w-full font-mono flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-4 px-6 rounded-lg border border-cyan-400/30 hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                        >
                            <Shield size={20} />
                            <span className="font-bold">
                                {mode === 'encrypt' ? 'INITIATE_ENCRYPTION' : 'INITIATE_DECRYPTION'}
                            </span>
                        </button>

                        {/* Result */}
                        {result && (
                            <ResultDisplay
                                result={result}
                                onCopy={onCopy}
                            />
                        )}
                    </div>

                    {/* Info Panel */}
                    <div className="mt-8 p-6 bg-gray-900/50 rounded-lg border border-gray-700">
                        <h3 className="font-mono text-cyan-400 font-bold mb-3">PROTOCOL_INFO</h3>
                        <p className="text-gray-300 font-mono text-sm leading-relaxed">
                            VIGENERE_CIPHER: A POLYALPHABETIC SUBSTITUTION PROTOCOL.
                            EACH PLAINTEXT CHARACTER IS SHIFTED BASED ON CORRESPONDING KEYWORD CHARACTER POSITION.
                            ENHANCED SECURITY THROUGH VARIABLE SHIFT PATTERNS.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CipherCard;