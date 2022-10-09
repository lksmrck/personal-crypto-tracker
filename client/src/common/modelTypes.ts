//Dashboard
export interface DashboardCryptoItem {
  identifier: string;
  name: string;
  ticker: string;
  imageURL: string;
  current_price: number;
  market_cap: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  last_updated: string;
  allTimeHigh: number;
}

//Holdings
export interface UpdatingCryptoItem {
  transactionType: "buy" | "sell";
  name: string;
  price: number;
  amount: number;
  date: string;
}

export interface HoldingItem {
  userId: string;
  name: string;
  price: number;
  amount: number;
  date: string | number;
}

//Transactions
export interface Transaction {
  transactionType: /* "buy" | "sell"; */ string;
  userId: number;
  name: string;
  price: number;
  amount: number;
  date: string;
}

//AUTH
export interface LoginData {}

export interface RegisterData {}

//Vložit INPUT PROPS !!!!
