type inputProps = {
    value: number,
    onValueChange: (target: {value: number}) => void
}

export default function mockInput({ value, onValueChange, ...props }: inputProps) {
    return (
        <input
            type="number"
            value={value}
            onChange={(e) => {
                const newValue = Number(e.target.value);
                onValueChange({ value: newValue });
            }}
            {...props}
        />
    );
};