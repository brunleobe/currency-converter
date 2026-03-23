import { useState, useEffect } from 'react';
import type { ExchangeRates } from '../types/currency';
import { fetchExchangeRates, convertCurrency } from '../services/exchangeRate';

export const useCurrency = () => {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('EUR');
  const [rates, setRates] = useState<ExchangeRates>({});
  const [result, setResult] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch rates on component mount and when 'from' currency changes
  useEffect(() => {
    const getRates = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchExchangeRates(from);
        setRates(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    getRates();
  }, [from]);

  const convert = () => {
    if (!rates[to]) {
      setError('Exchange rate not available');
      return;
    }
    const converted = convertCurrency(amount, rates[to]);
    setResult(converted);
  };

  const swapCurrencies = () => {
    setFrom(to);
    setTo(from);
  };

  return {
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
    swapCurrencies,
    rates: Object.keys(rates),
  };
};
