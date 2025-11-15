interface KeywordInputProps {
    value: string;
    onChange: (value: string) => void;
}

const KeywordInput = ({ value, onChange }: KeywordInputProps) => {
    return (
        <div>
            <label className="block font-mono text-sm font-medium text-cyan-400 mb-2">
                ENCRYPTION_KEY
            </label>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full p-4 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white font-mono placeholder-gray-500 transition-all duration-300"
                placeholder="Enter encryption key..."
            />
        </div>
    );
};

export default KeywordInput;