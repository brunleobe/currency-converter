type Props = {
  value: number;
  onChange: (value: number) => void;
};

export default function AmountInput({ value, onChange }: Props) {
  return (
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full border p-2 rounded mb-3"
      placeholder="Enter amount"
    />
  );
}