import { apiSlice } from './apiSlice'

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // loginUser: builder.mutation<
    //   {  }
  }),
  overrideExisting: false
})