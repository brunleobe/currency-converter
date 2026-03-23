import type { ExchangeRates } from '../types/currency';

const API_BASE_URL = 'https://v6.exchangerate-api.com/v6/7ae6d6cfc38c9ef228f054d4/latest/USD';

export const fetchExchangeRates = async (baseCurrency: string): Promise<ExchangeRates> => {
  try {
    const response = await fetch(`${API_BASE_URL}/${baseCurrency}`);
    if (!response.ok) throw new Error('Failed to fetch exchange rates');
    const data = await response.json();
    return data.rates;
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    throw error;
  }
};

export const convertCurrency = (amount: number, rate: number): number => {
  return amount * rate;
};

