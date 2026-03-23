type Props = {
  result: number;
  currency: string;
};

export default function ResultDisplay({ result, currency }: Props) {
  if (result === 0) return null;

  return (
    <p className="mt-4 text-lg font-semibold">
      Result: {result.toFixed(2)} {currency}
    </p>
  );
}