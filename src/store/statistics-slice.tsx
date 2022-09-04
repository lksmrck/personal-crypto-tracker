import { createSlice } from "@reduxjs/toolkit";

export interface CryptoItem {
  id: number;
  name: string;
  ticker: string;
  price: number;
  date: string;
}

interface InitialState {
  holdings: CryptoItem[];
  TBD: boolean;
}

const initialState: InitialState = { holdings: [], TBD: true };

const statisticsSlice = createSlice({
  name: "statistics",
  initialState: initialState as InitialState,
  reducers: {
    //není potřeba psát if statementy. Tyto reducery budou triggernute na zaklade actions
    addHolding(state, action) {
      const item: CryptoItem = action.payload; // tady bude objekt s informacema z formu
      //každý reducer dostane State. Může i 2. parameter Action (pokud je potřeba)
      state.holdings.push({
        id: item.id,
        name: item.name,
        ticker: item.ticker,
        price: item.price,
        date: item.date,
      });
    },

    /*   removeHolding(state, action) {
      state.holdings--;
    }, */

    toggleCounter(state) {
      state.TBD = !state.TBD;
    },
  },
});

export default statisticsSlice;
export const statisticsActions = statisticsSlice.actions; //tady jsou nazvy akci z reduceru: counterSlice.actions.increment, counterSlice.actions.decrement, ...
