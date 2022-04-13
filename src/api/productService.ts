import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const productService = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://5b5473af611af00014b90cda.mockapi.io/api' }),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => `products`,
    }),
  }),
});

export default productService;
