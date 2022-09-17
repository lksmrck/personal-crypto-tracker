//Statistics (holdings)
export interface DashboardCryptoItem {
  ticker: String;
  name: String;
  price: String;
  dayMovement: String;
  marketCap: String;
}

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
