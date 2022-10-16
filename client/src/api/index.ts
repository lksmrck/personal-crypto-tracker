import axios from "axios";
import { HoldingItem, Transaction } from "../common/modelTypes";

const API = axios.create({baseURL: process.env.REACT_APP_API })

//Holdings
export const fetchHoldings = (userId: string) =>
  API.get("/holdings", { params: { userId: userId } });

export const addHolding = (newHolding: HoldingItem) =>
  API.post("/holdings", newHolding);

export const updateHolding = (name: string, updatedHolding: HoldingItem) =>
  API.patch(`${"/holdings"}/${name}`, updatedHolding);

//Pokud se všechen Holding prodal (tzn. držený amount = 0), tak mažu z databáze. V případném opětovném nákupu se vytvoří znovu a od té doby se znovu počítá průměrná cena a P/L
export const deleteHolding = (formData: Object) =>
  API.post(`${"/holdings"}/delete`, formData);

//Transactions history
export const fetchTransactions = (userId: string) =>
  API.get("/transactions", { params: { userId: userId } });

export const addTransaction = (newTransaction: Transaction) =>
  API.post("/transactions", newTransaction);

//Auth
export const registerUser = (userData: any) =>
  API.post("/register", userData);

export const loginUser = (userData: any) => API.post("/login", userData);
