import { apiSlice } from './apiSlice'
import { IUser } from '../features/authSlice'
import { LoginInput } from '../../pages/Login'

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<
      { user: IUser, accessToken: string, refreshToken: string },
      LoginInput
    >({
      query(data) {
        return {
          url: 'account/login',
          method: 'POST',
          body: data,
          credentials: 'include'
        }
      }
    }),
    logout: builder.mutation<void, { accessToken: string, refreshToken: string }>({
      query(data) {
        return {
          url: 'account/revoke',
          method: 'DELETE',
          body: data,
          credentials: 'include'
        }
      }
    })
  }),
  overrideExisting: false
})

export const { 
  useLoginMutation, 
  useLogoutMutation
} = authApi
