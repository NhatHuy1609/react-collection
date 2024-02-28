import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface IAuthState {
  user: IUser | null
  accessToken: string | null
  refreshToken: string | null
}

interface IUser {
  name: string
  email: string
}

const initialState: IAuthState= {
  user: null,
  accessToken: null,
  refreshToken: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ user: IUser, accessToken: string, refreshToken: string }>) => {
      const { user: userData, accessToken, refreshToken } = action.payload

      state.user = userData
      state.accessToken = accessToken
      state.refreshToken = refreshToken
    },
    logOut: () => initialState
  }
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state: RootState) => state.auth.user
export const selectCurrentToken = (state: RootState) => state.auth.accessToken

