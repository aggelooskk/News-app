import { apiSlice } from "./apiSlice";

export const newsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () => `top-headlines?country=us`,
    }),
    getTrendingNews: builder.query({
      query: (trending) => `everything?q=${trending}`,
    }),
    getMarketNews: builder.query({
      query: (market) => `everything?q=${market}`,
    }),
  }),
});

export const {
  useGetNewsQuery,
  useGetTrendingNewsQuery,
  useGetMarketNewsQuery,
} = newsApi;
