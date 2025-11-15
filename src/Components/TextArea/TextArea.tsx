interface TextAreaProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    rows: number;
}

const TextArea = ({ label, value, onChange, placeholder, rows }: TextAreaProps) => {
    return (
        <div>
            <label className="block font-mono text-sm font-medium text-cyan-400 mb-2">
                {label}
            </label>
            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full p-4 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white font-mono placeholder-gray-500 transition-all duration-300"
                rows={rows}
                placeholder={placeholder}
            />
        </div>
    );
};

export default TextArea;