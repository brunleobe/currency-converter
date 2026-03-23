export type Currency = "USD" | "EUR" | "GBP" | "JPY" | "CAD" | "AUD" | "CHF" | "CNY" | "INR" | "NGN";

export interface ExchangeRates {
  [key: string]: number;
}

export interface ExchangeRateResponse {
  rates: ExchangeRates;
}        
