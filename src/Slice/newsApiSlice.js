import { apiSlice } from "./apiSlice";

export const newsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () => "/news",
    }),
    getNewsById: builder.query({
      query: (id) => `/news/${id}`,
    }),
  }),
});

export const { useGetNewsQuery, useGetNewsByIdQuery } = postsApi;
