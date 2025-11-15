import { Copy, CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface ResultDisplayProps {
    result: string;
    onCopy: () => void;
}

const ResultDisplay = ({ result, onCopy }: ResultDisplayProps) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        onCopy();
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="mt-6">
            <label className="block font-mono text-sm font-medium text-cyan-400 mb-2">
                OUTPUT_RESULT
            </label>
            <div className="relative">
                <textarea
                    value={result}
                    readOnly
                    className="w-full p-4 bg-gray-900 border border-green-500/30 rounded-lg text-white font-mono resize-none"
                    rows={4}
                />
                <button
                    onClick={handleCopy}
                    className="absolute right-3 top-3 p-2 text-gray-400 hover:text-green-400 transition-colors duration-300"
                    title="Copy to clipboard"
                >
                    {copied ? <CheckCircle size={20} className="text-green-400" /> : <Copy size={20} />}
                </button>
                <div className="absolute bottom-2 left-3">
                    <span className="font-mono text-xs text-green-400 bg-green-900/30 px-2 py-1 rounded">
                        SECURED
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ResultDisplay;