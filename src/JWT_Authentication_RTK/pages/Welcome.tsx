import { useAppSelector } from '../hooks/store'
import { selectCurrentUser, selectCurrentToken } from '../redux/features/authSlice'

const Welcome = () => {
  const user = useAppSelector(selectCurrentUser)
  const token = useAppSelector(selectCurrentToken)

  const welcomeContent: string = user ? `Welcome ${user.name}` : 'Welcome'
  const tokenAbbr: string = `${token?.slice(0, 9)}...`

  return (
    <section className='bg-[#1c2f4d] p-4 text-slate-400'>
      <h1 className='text-2xl font-semibold text-slate-200'>{welcomeContent}</h1>
      <p className='text-slate-200'>Token: {tokenAbbr}</p>
    </section>
  )
}

export default Welcome
