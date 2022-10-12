import { registerUser } from '../state/actions/auth';

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

export interface UpdateItem {
  name: string, 
  holding: HoldingItem
}

export interface ItemToDelete {
  userId: string,
  itemName: string
}

//Transactions
export interface Transaction {
  transactionType: string;
  userId: string;
  name: string;
  price: number;
  amount: number;
  date: string;
}


export interface AuthData {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  confirmPassword: string,
}


//Redux action types
//Holdings
export interface HoldingActions {
  FETCH_ALL_HOLDINGS: string;
  ADD_HOLDING: string;
  UPDATE_HOLDING: string;
  DELETE_HOLDING: string
}

export interface FetchAllHoldings {
  type: HoldingActions["FETCH_ALL_HOLDINGS"];
  payload: HoldingItem[]
}

export interface AddHolding {
  type: HoldingActions["ADD_HOLDING"];
  payload: HoldingItem
}

export interface UpdateHolding {
  type: HoldingActions["UPDATE_HOLDING"];
  payload: any
}

export interface DeleteHolding {
  type: HoldingActions["DELETE_HOLDING"];
  payload: ItemToDelete
}

//Transactions
export interface TransactionsActions {
  FETCH_ALL_TRANSACTIONS: string;
  ADD_TRANSACTION: string;

}

export interface FetchAllTransactions {
  type: TransactionsActions["FETCH_ALL_TRANSACTIONS"];
  payload:  Transaction[]
}

export interface AddTransaction {
  type: TransactionsActions["ADD_TRANSACTION"];
  payload: Transaction
}

//Auth
export interface AuthActionTypes {
  AUTH: string;
  LOGOUT: string;
  AUTH_ERROR: string;
  CLEAR_AUTH_ERROR: string
}

export interface AuthFormData {
  formData: AuthData;
history: any
}


export interface Auth {
  type: AuthActionTypes["AUTH"];
  data: AuthFormData
}

export interface Logout {
  type: AuthActionTypes["LOGOUT"];
  data: string
}

export interface AuthError {
  type: AuthActionTypes["AUTH_ERROR"];
  data: string
}

export interface ClearAuthError {
  type: AuthActionTypes["CLEAR_AUTH_ERROR"];
  data: any
}


//Errors and Loadings
export interface ErrorsLoadings {
  SET_ERROR: string;
  CLEAR_ERROR: string;
  START_LOADING: string;
  STOP_LOADING: string
}

export interface SetError {
  type: ErrorsLoadings["SET_ERROR"];
  payload: Transaction
}
export interface ClearError {
  type: ErrorsLoadings["CLEAR_ERROR"];
  payload: Transaction
}
export interface StartLoading {
  type: ErrorsLoadings["START_LOADING"];
  payload: Transaction
}
export interface StopLoading {
  type: ErrorsLoadings["STOP_LOADING"];
  payload: Transaction
}


export type Actions =
  | FetchAllHoldings
  | AddHolding
  | UpdateHolding
  | DeleteHolding
  | FetchAllTransactions
  | AddTransaction
  

export type AuthActions =
  | Auth
  | Logout
  | AuthError 
  | ClearAuthError





