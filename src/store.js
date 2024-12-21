import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./Slices/apiSlice.js";
import { newsApi } from "./Slices/newsApiSlice.js";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [newsApi.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
