import { createSlice } from "@reduxjs/toolkit";

interface Transaction {
  transactionType: "buy" | "sell";
  id: number;
  name: string;
  price: number;
  amount: number;
  date: string;
}

interface InitialState {
  transactions: Transaction[];
  TBD1: boolean;
}
const initialState: InitialState = { transactions: [], TBD1: true };

const transactionsSlice = createSlice({
  name: "history",
  initialState: initialState, //JS ES6 lze napsat jen initialState
  reducers: {
    //není potřeba psát if statementy. Tyto reducery budou triggernute na zaklade actions
    addTransaction(state, action) {
      //každý reducer dostane State. Může i 2. parameter Action (pokud je potřeba)
      const item: Transaction = action.payload; // tady bude objekt s informacema z formu
      //každý reducer dostane State. Může i 2. parameter Action (pokud je potřeba)
      state.transactions.push({
        transactionType: item.transactionType,
        id: item.id, //transaction unique ID
        name: item.name,
        price: item.price,
        amount: item.amount,
        date: item.date,
      });
    },

    toggleCounter(state) {
      state.TBD1 = !state.TBD1;
    },
  },
});

export default transactionsSlice;
export const transactionsActions = transactionsSlice.actions; //tady jsou nazvy akci z reduceru: counterSlice.actions.increment, counterSlice.actions.decrement, ...
