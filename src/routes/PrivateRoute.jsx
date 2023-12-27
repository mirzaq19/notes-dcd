import useAuth from '@/contexts/auth'
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoute = () => {
  const { authState } = useAuth()
  return authState.authenticated ? <Outlet /> : <Navigate to="/login" replace />
}

export default PrivateRoute
