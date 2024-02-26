import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IAuthState {
  name: string | null
  accessToken: string | null
  refreshToken: string | null
}

const initialState: IAuthState= {
  name: null,
  accessToken: null,
  refreshToken: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ name: string, accessToken: string, refreshToken: string }>) => {
      const { name: userName, accessToken, refreshToken } = action.payload

      state.name = userName
      state.accessToken = accessToken
      state.refreshToken = refreshToken
    },
    logOut: () => initialState
  }
})

export default authSlice.reducer

export const { setCredentials, logOut } = authSlice.actions
