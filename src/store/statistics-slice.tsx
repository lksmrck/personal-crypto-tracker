import { createSlice } from "@reduxjs/toolkit";

interface UpdatingCryptoItem {
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
    addNewHolding(state, action) {
      const item: CryptoItem = action.payload; // tady bude objekt s informacema z formu
      //každý reducer dostane State. Může i 2. parameter Action (pokud je potřeba)
      state.holdings.push({
        id: item.id, //transaction unique ID --> tady ani nepotřebuju
        name: item.name,
        price: item.price,
        amount: item.amount,
        date: item.date, // dá datum poslední transakce
      });
    },

    updateExistingHolding(state, action) {
      const item: UpdatingCryptoItem = action.payload;

      if (item.transactionType === "buy") {
        const updatedHoldings = state.holdings.map((holding) => {
          if (holding.name === item.name) {
            //pomocné výpočty
            const oldTotalPrice = holding.price * holding.amount;
            const newTotalPrice = item.price * item.amount;
            const updatedPrice =
              (oldTotalPrice + newTotalPrice) / (holding.amount + item.amount);
            return {
              ...holding,
              price: updatedPrice,
              amount: holding.amount + item.amount,
              date: item.date,
            };
          }

          return holding;
        });
        state.holdings = updatedHoldings;
      }

      /*     else if (item.transactionType === "sell") {} */

      /*   removeHolding(state, action) {
      state.holdings--;
    }, */

      /* toggleCounter(state) {
      state.TBD = !state.TBD;
    }, */
    },
  },
});

export default statisticsSlice;
export const statisticsActions = statisticsSlice.actions; //tady jsou nazvy akci z reduceru: counterSlice.actions.increment, counterSlice.actions.decrement, ...
