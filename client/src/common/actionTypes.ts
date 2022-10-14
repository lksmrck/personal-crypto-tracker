import { Transaction, HoldingItem, AuthData } from './modelTypes';


//Redux action types
//Holdings
export interface HoldingActions {
    FETCH_ALL_HOLDINGS: string;
    ADD_HOLDING: string;
    UPDATE_HOLDING: string;
    DELETE_HOLDING: string
  }
//TEST
  export enum HoldingAction {
    FetchAllHoldings
  }
  
  export interface FetchAllHoldings {
    type: HoldingAction.FetchAllHoldings
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
    payload: { userId: string, itemName: string}
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
    history: string
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
  

  //Výstup
  //Actions => pro Holdings, Transactions, 
  export type Actions =
    | FetchAllHoldings
    | AddHolding
    | UpdateHolding
    | DeleteHolding
    | FetchAllTransactions
    | AddTransaction
    
    //AuthActions => pro Auth
  export type AuthActions =
    | Auth
    | Logout
    | AuthError 
    | ClearAuthError

