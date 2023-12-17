import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const baseApi = createApi({
  reducerPath: 'ThunderStoreAPIs',
  tagTypes: ['address', 'order', 'review', 'productReview'],
  baseQuery: fetchBaseQuery({
    mode: 'cors',
    baseUrl: 'https://localhost:3000/',
    credentials: 'include',
  }),
  endpoints: () => ({}),
});

export default baseApi;
