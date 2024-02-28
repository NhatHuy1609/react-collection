import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAppSelector } from '~/JWT_Authentication_RTK/hooks/store'
import { selectCurrentUser } from '~/JWT_Authentication_RTK/redux/features/authSlice'

const RequireAuth = () => {
  const user = useAppSelector(selectCurrentUser)
  const location = useLocation()

  return user ? <Outlet /> : <Navigate to='login' state={{ from: location }} replace />
}

export default RequireAuth
