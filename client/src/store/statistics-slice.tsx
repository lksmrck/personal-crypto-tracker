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

const DUMMY_HOLDINGS = [
  {
    id: 1,
    name: "bitcoin",
    price: 24000,
    amount: 14,
    date: "24.1.2021",
  },
  {
    id: 1,
    name: "cardano",
    price: 1.4,
    amount: 190,
    date: "24.1.2021",
  },
  {
    id: 1,
    name: "polkadot",
    price: 15,
    amount: 129,
    date: "24.1.2021",
  },
  {
    id: 1,
    name: "ethereum",
    price: 10,
    amount: 14,
    date: "24.1.2021",
  },
];

const initialState: InitialState = {
  holdings: DUMMY_HOLDINGS /* [] */,
  TBD: true,
};

const statisticsSlice = createSlice({
  name: "statistics",
  initialState: initialState as InitialState,
  reducers: {
    //Přidání nového itemu, když item ještě nemá žádný holding
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
    //Upravení holdingu podle přikoupení/odprodání, pokud holding daného itemu už existuje
    updateExistingHolding(state, action) {
      const item: UpdatingCryptoItem = action.payload;

      if (item.transactionType === "buy") {
        const updatedHoldings = state.holdings.map((holding) => {
          if (holding.name === item.name) {
            //pomocné výpočty ceny
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
      } else if (item.transactionType === "sell") {
        const updatedHoldings = state.holdings.map((holding) => {
          if (holding.name === item.name) {
            //pomocné výpočty ceny
            /*      const oldTotalPrice = holding.price * holding.amount;
            const averagePrice = oldTotalPrice/holding.amount */
            const newPrice = 1; //UPRAVIT

            return {
              ...holding,
              price: holding.price, // upravit
              amount: holding.amount - item.amount,
              date: item.date,
            };
          }

          return holding;
        });
        state.holdings = updatedHoldings;
      }

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
