import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://newsapi.org/v2/",

    prepareHeaders: (headers) => {
      headers.set("X-Api-Key", "ebb3bb8e19ea49839ae02c30fd7046d3");
      return headers;
    },
  }),
  endpoints: () => ({}),
});
