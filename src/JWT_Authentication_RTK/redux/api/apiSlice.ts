import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
import type { 
  FetchBaseQueryError, 
  FetchArgs, 
  BaseQueryFn } from '@reduxjs/toolkit/query'
import { RootState } from '../store'
import { setCredentials, logOut  } from '../features/authSlice'

const baseQuery = fetchBaseQuery({ 
  baseUrl: 'http://localhost:5046/swagger/v1/api',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.accessToken
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
    return headers
  }
})

const customFetchBase: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)
  if (result.error && result.error.status === 401) {
    const { accessToken, refreshToken } = (api.getState() as RootState).auth
    const refreshResult = await baseQuery({
      url: '/account/refresh',
      body: { accessToken, refreshToken }
    }, api, extraOptions)

    if (refreshResult.data) {
      const { userName: name, token: accessToken, refreshToken } = refreshResult.data as any
      // Store the new token
      api.dispatch(setCredentials({ name, accessToken, refreshToken }))
      // Retry the initial query
      await baseQuery(args, api, extraOptions)
    } else {
      api.dispatch(logOut())
    }
  }

  return result
}

export const apiSlice = createApi({
  baseQuery: customFetchBase,
  endpoints: builder => ({})
})