type Props = {
  value: string;
  onChange: (value: string) => void;
};

const currencies = ["USD", "NGN", "EUR", "GBP", "JPY", "CAD", "AUD", "CHF", "CNY", "INR"];

export default function CurrencySelect({ value, onChange }: Props) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="flex-1 border p-2 rounded"
    >
      {currencies.map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  );
}