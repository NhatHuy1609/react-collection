import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import FormInput from '../components/FormInput'
import { useLoginMutation } from '../redux/api/authAPI'
import { useAppDispatch } from '../hooks/store'
import { useNavigate } from 'react-router-dom'
import { setCredentials } from '../redux/features/authSlice'

export interface LoginInput {
  username: string
  password: string
}

const loginSchema = z.object({
  username: z.string(),
  password: z.string().min(1)
})

const Login = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [login, { isLoading }] = useLoginMutation()

  const { handleSubmit, register } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema)
  })

  const onSubmit: SubmitHandler<LoginInput> = async (data) => {
    try {
      const userData = await login({ ...data }).unwrap()
      dispatch(setCredentials({ ...userData }))
      navigate('/welcome')
    } catch (error) {
      console.log(error as Error)
    }
  }

  return (
    <section className='bg-[#1c2f4d] p-4 text-slate-400'>
      <h1 className='text-2xl font-semibold text-slate-100'>LOGIN</h1>
      <form onSubmit={handleSubmit(onSubmit)} id='loginForm'>
        <div className='flex flex-col gap-0.5'>
          <label htmlFor='username'>User name</label>
          <FormInput
            required
            type='text'
            id='username'
            placeholder='Enter user name...'
            {...register('username')}
          />
        </div>

        <div className='flex flex-col'>
          <label htmlFor='password'>Password</label>
          <FormInput
            type='password'
            id='password'
            placeholder='Enter password...'
            {...register('password')}
            required
          />
        </div>

        <input
          type='submit'
          value={isLoading ? 'Login...' : 'Login'}
          className='mt-2 cursor-pointer rounded-2xl bg-sky-500 px-6 py-2 text-sm font-semibold text-slate-100 hover:opacity-90'
        />
      </form>
    </section>
  )
}

export default Login
