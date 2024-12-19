import { apiSlice } from "./apiSlice";

export const newsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () => "/posts",
    }),
    getNewsById: builder.query({
      query: (id) => `/posts/${id}`,
    }),
  }),
});

export const { useGetNewsQuery, useGetNewsByIdQuery } = postsApi;
