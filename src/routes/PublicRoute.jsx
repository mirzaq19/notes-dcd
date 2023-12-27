import useAuth from '@/contexts/auth'
import { Outlet, Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'

const PublicRoute = ({ restricted }) => {
  const { authState } = useAuth()
  return restricted && authState.authenticated ? (
    <Navigate to="/" replace />
  ) : (
    <Outlet />
  )
}

PublicRoute.propTypes = {
  restricted: PropTypes.bool,
}

export default PublicRoute
