import axios from "axios";

const holdingsURL = "http://localhost:8000/holdings";
const transactionsURL = "http://localhost:8000/transactions";

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
