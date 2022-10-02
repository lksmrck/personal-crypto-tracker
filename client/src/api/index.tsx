import axios from "axios";

const holdingsURL = "http://localhost:8000/holdings";
const transactionsURL = "http://localhost:8000/transactions";
const registerURL = "http://localhost:8000/register";
const loginURL = "http://localhost:8000/login";

//Holdings
export const fetchHoldings = () => axios.get(holdingsURL);

export const addHolding = (newHolding: any) =>
  axios.post(holdingsURL, newHolding);

export const updateHolding = (name: string, updatedHolding: any) =>
  axios.patch(`${holdingsURL}/${name}`, updatedHolding);

//Transactions history
export const fetchTransactions = () => axios.get(transactionsURL);

export const addTransaction = (newTransaction: any) =>
  axios.post(transactionsURL, newTransaction);

//Auth
export const registerUser = (userData: any) =>
  axios.post(registerURL, userData);

export const loginUser = (userData: any) => axios.post(loginURL, userData);
