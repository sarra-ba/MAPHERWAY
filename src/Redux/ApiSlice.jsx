import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost/backend' }), 
  endpoints: (builder) => ({
    getUserDetail: builder.query({
      query: (userId) => `users.php?id=${userId}`,
    }),
  }),
});

export const { useGetUserDetailQuery } = userApi;

export const userApiReducer = userApi.reducer;
