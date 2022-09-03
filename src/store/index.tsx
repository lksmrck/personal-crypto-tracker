import { configureStore } from "@reduxjs/toolkit"; //umožňuje zmergovat více slices do jednoho store.
import historySlice from "./history-slice";
import statisticsSlice from "./statistics-slice";

const store = configureStore({
  reducer: {
    history: historySlice.reducer,
    statistics: statisticsSlice.reducer,
  },
});

export default store;
