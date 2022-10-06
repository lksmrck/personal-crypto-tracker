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
  userId: number;
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
  userId: number;
  name: string;
  price: number;
  amount: number;
  date: string;
}

export interface TransactionsState {
  transactions: Transaction[];
}

//Vložit INPUT PROPS !!!!
