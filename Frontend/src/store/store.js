  import { configureStore, createSlice } from "@reduxjs/toolkit";
  import userSlice from "./slices/userSlice.js"
import commissionReducer from "./slices/commissionSlice.js";
import auctionReducer from "./slices/auctionSlice.js";

// Dummy slice as a placeholder


export const store = configureStore({
  reducer: {
    user: userSlice,
    commission: commissionReducer,
    auction:auctionReducer,
  },
});