import { getUserLogged, removeAccessToken } from '@/utilities/network-data'
import useAuth from '@/contexts/auth'

const useLogin = () => {
  const { authDispatch } = useAuth()
  const loginDispatch = async ({
    initialAction = () => {},
    sucessAction = () => {},
    errorAction = () => {},
    finalAction = () => {},
  }) => {
    try {
      initialAction && initialAction()

      authDispatch({ type: 'LOGIN' })
      const { error: getUserError, data } = await getUserLogged()
      if (getUserError) throw new Error('Get user failed')
      authDispatch({ type: 'POPULATE', payload: data })

      sucessAction && sucessAction()
    } catch (error) {
      errorAction && errorAction(error)
      removeAccessToken()
      authDispatch({ type: 'LOGOUT' })
    } finally {
      authDispatch({ type: 'STOP_LOADING' })
      finalAction && finalAction()
    }
  }

  return { loginDispatch }
}

export default useLogin
