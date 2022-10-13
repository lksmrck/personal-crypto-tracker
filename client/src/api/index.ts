import axios from "axios";
import { HoldingItem, Transaction } from "../common/modelTypes";

const BASE_URL_LH = "http://localhost:8000"

const BASE_URL = "https://personalcryptotracker.herokuapp.com/"

const holdingsURL = BASE_URL_LH + "/holdings";
const transactionsURL = BASE_URL_LH + "/transactions";
const registerURL = BASE_URL_LH + "/register";
const loginURL = BASE_URL_LH + "/login";

//Holdings
export const fetchHoldings = (userId: string) =>
  axios.get(holdingsURL, { params: { userId: userId } });

export const addHolding = (newHolding: HoldingItem) =>
  axios.post(holdingsURL, newHolding);

export const updateHolding = (name: string, updatedHolding: HoldingItem) =>
  axios.patch(`${holdingsURL}/${name}`, updatedHolding);

//Pokud se všechen Holding prodal (tzn. držený amount = 0), tak mažu z databáze. V případném opětovném nákupu se vytvoří znovu a od té doby se znovu počítá průměrná cena a P/L
export const deleteHolding = (formData: Object) =>
  axios.post(`${holdingsURL}/delete`, formData);

//Transactions history
export const fetchTransactions = (userId: string) =>
  axios.get(transactionsURL, { params: { userId: userId } });

export const addTransaction = (newTransaction: Transaction) =>
  axios.post(transactionsURL, newTransaction);

//Auth
export const registerUser = (userData: any) =>
  axios.post(registerURL, userData);

export const loginUser = (userData: any) => axios.post(loginURL, userData);
