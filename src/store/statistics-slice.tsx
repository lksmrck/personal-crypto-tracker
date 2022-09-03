import { createSlice } from "@reduxjs/toolkit";

const initialState = { TBD: 0, TBD1: true };

const statisticsSlice = createSlice({
  name: "statistics",
  initialState: initialState, //JS ES6 lze napsat jen initialState
  reducers: {
    //není potřeba psát if statementy. Tyto reducery budou triggernute na zaklade actions
    incremet(state) {
      //každý reducer dostane State. Může i 2. parameter Action (pokud je potřeba)
      state.TBD++;
    },
    decrement(state) {
      state.TBD--;
    },

    toggleCounter(state) {
      state.TBD1 = !state.TBD1;
    },
  },
});

export default statisticsSlice;
export const statisticsActions = statisticsSlice.actions; //tady jsou nazvy akci z reduceru: counterSlice.actions.increment, counterSlice.actions.decrement, ...
