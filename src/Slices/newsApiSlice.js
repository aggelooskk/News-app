import { apiSlice } from "./apiSlice";

export const newsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () => `top-headlines?country=us`,
    }),
    getNewsById: builder.query({
      query: (id) => `everything?q=${id}`,
    }),
  }),
});

export const { useGetNewsQuery, useGetNewsByIdQuery } = newsApi;
