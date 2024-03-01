import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAppSelector } from '../../hooks/store'
import { selectCurrentUser } from '../../redux/features/authSlice'

const RequireAuth = () => {
  const user = useAppSelector(selectCurrentUser)
  const location = useLocation()

  return user ? <Outlet /> : <Navigate to='login' state={{ from: location }} replace />
}

export default RequireAuth
