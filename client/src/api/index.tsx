import axios from "axios";

const holdingsURL = "http://localhost:8000/holdings"; //dát /holdings a dolů /transactions
const transactionsURL = "http://localhost:8000/transactions";

//Holdings
export const fetchHoldings = () => axios.get(holdingsURL);

export const addHolding = (newHolding: any) =>
  axios.post(holdingsURL, newHolding);

export const updateHolding = (id: any, updatedHolding: any) =>
  axios.patch(`${holdingsURL}/${id}`, updatedHolding); //zkopirovany fetch - prizpusobit

//Transactions history
export const fetchTransactions = () => axios.get(transactionsURL);

export const addTransaction = (newTransaction: any) =>
  axios.post(transactionsURL, newTransaction);
