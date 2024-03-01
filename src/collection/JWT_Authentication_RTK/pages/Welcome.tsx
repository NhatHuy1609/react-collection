import { useAppDispatch, useAppSelector } from '../hooks/store'
import {
  logOut,
  selectCurrentUser,
  selectCurrentToken,
  selectRefreshToken
} from '../redux/features/authSlice'
import { useLogoutMutation } from '../redux/api/authAPI'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {
  const user = useAppSelector(selectCurrentUser)
  const token = useAppSelector(selectCurrentToken)
  const refreshToken = useAppSelector(selectRefreshToken)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [logOutUser, { isLoading: isLoggingOut }] = useLogoutMutation()

  const welcomeContent: string = user ? `Welcome ${user.name}` : 'Welcome'
  const tokenAbbr: string = `${token?.slice(0, 9)}...`

  const handleLogout = async () => {
    logOutUser({
      accessToken: token as string,
      refreshToken: refreshToken as string
    })
    dispatch(logOut())
    navigate('/login')
  }

  const content = !isLoggingOut ? (
    <section className='bg-[#1c2f4d] p-4 text-slate-400'>
      <h1 className='text-2xl font-semibold text-slate-200'>
        {welcomeContent}
      </h1>
      <p className='text-slate-200'>Token: {tokenAbbr}</p>
      <button
        onClick={handleLogout}
        className='mt-2 rounded-md bg-slate-100 px-2 py-1 text-sm text-slate-500'
      >
        Logout
      </button>
    </section>
  ) : (
    'Wait for logging out'
  )

  return content
}

export default Welcome
