import { AuthContext } from '@/contexts/auth'
import {
  getAccessToken,
  getUserLogged,
  removeAccessToken,
} from '@/utilities/network-data'
import { useEffect, useReducer } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        authenticated: true,
        loading: true,
      }
    case 'POPULATE':
      return {
        ...state,
        user: action.payload,
      }
    case 'LOGOUT':
      return {
        ...state,
        authenticated: false,
        user: null,
      }
    case 'STOP_LOADING':
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(reducer, {
    authenticated: getAccessToken() ? true : false,
    user: null,
    loading: true,
  })

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = getAccessToken()
        if (token === null || token === undefined) {
          throw new Error('No token')
        }
        authDispatch({ type: 'LOGIN' })
        const { error: getUserError, data } = await getUserLogged()
        if (getUserError) throw new Error('Get user failed')
        authDispatch({ type: 'POPULATE', payload: data })
      } catch (error) {
        console.log(error.message)
        removeAccessToken()
        authDispatch({ type: 'LOGOUT' })
      } finally {
        authDispatch({ type: 'STOP_LOADING' })
      }
    }
    fetchUser()
  }, [])

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
