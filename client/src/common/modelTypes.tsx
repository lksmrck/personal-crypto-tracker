//Dashboard
export interface DashboardCryptoItem {
  name: String;
  ticker: String;
  imageURL: String;
  current_price: Number;
  market_cap: Number;
  price_change_24h: Number;
  price_change_percentage_24h: Number;
  last_updated: String;

  /* dayMovement: String;
  marketCap: String; */
}

//Statistics (holdings)
export interface UpdatingCryptoItem {
  transactionType: "buy" | "sell";
  name: string;
  price: number;
  amount: number;
  date: string;
}

export interface CryptoItem {
  id: number;
  name: string;
  price: number;
  amount: number;
  date: string;
}

export interface StatisticsState {
  holdings: CryptoItem[];
  TBD: boolean;
}

//Transactions
export interface Transaction {
  transactionType: /* "buy" | "sell"; */ string;
  id: number;
  name: string;
  price: number;
  amount: number;
  date: string;
}

export interface TransactionsState {
  transactions: Transaction[];
  TBD1: boolean;
}
