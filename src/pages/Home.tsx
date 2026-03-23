// src/pages/Home.tsx

import AmountInput from "../components/AmountInput";
import CurrencySelect from "../components/CurrencySelect";
import ConvertButton from "../components/ConvertButton";
import ResultDisplay from "../components/ResultDisplay";
import SwapButton from "../components/SwapButton";
import { useCurrency } from "../hooks/useCurrency";

export default function Home() {
  const {
    amount,
    setAmount,
    from,
    to,
    setFrom,
    setTo,
    result,
    loading,
    error,
    convert,
    swapCurrencies
  } = useCurrency();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-[350px]">
        <h1 className="text-xl font-bold mb-4">Currency Converter</h1>

        <AmountInput value={amount} onChange={setAmount} />

        <div className="flex gap-2 mb-3">
          <CurrencySelect value={from} onChange={setFrom} />
          <SwapButton onClick={swapCurrencies} />
          <CurrencySelect value={to} onChange={setTo} />
        </div>

        <ConvertButton onClick={convert} loading={loading} />

        {error && <p className="text-red-500 mt-2">{error}</p>}

        <ResultDisplay result={result} currency={to} />
      </div>
    </div>
  );
}