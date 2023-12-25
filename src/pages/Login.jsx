import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import toast from 'react-hot-toast'
import { login, putAccessToken } from '@/utilities/network-data'
import Button from '@/components/buttons/Button'
import Input from '@/components/form/Input'
import CustomLink from '@/components/links/CustomLink'
import useLogin from '@/hooks/useLogin'

const Login = () => {
  const [email, setEmail] = useState('')
  const [logginIn, setLogginIn] = useState(false)
  const [password, setPassword] = useState('')
  const { loginDispatch } = useLogin()
  const navigate = useNavigate()

  const loginHandler = async () => {
    const { error, data } = await login({
      email,
      password,
    })
    if (error) throw new Error('Login failed')

    putAccessToken(data.accessToken)
    await loginDispatch({
      sucessAction: () => navigate('/'),
      errorAction: (err) => console.log(err.message),
    })
  }

  const onSubmitHandler = async (e) => {
    setLogginIn(true)
    e.preventDefault()

    toast.promise(
      loginHandler().finally(() => {
        setLogginIn(false)
      }),
      {
        loading: 'Loading',
        success: 'Login successfully',
        error: (err) =>
          err.message ?? 'Something went wrong, please try again later!',
      }
    )
  }

  return (
    <div className="min-h-main">
      <div className="my-8">
        <div className="text-center mb-6">
          <h1 className="mb-1">Login</h1>
          <p className="tracking-wider">Login to use the app, please</p>
        </div>
        <div className="flex justify-center">
          <form className="max-w-xl" onSubmit={onSubmitHandler}>
            <label className="inline-block mb-2" htmlFor="email">
              Email
            </label>
            <Input
              id="email"
              className="mb-3"
              placeholder="email"
              type="email"
              value={email}
              setValue={setEmail}
              required
            />
            <label className="inline-block mb-2" htmlFor="password">
              Password
            </label>
            <Input
              id="password"
              placeholder="******"
              type="password"
              value={password}
              setValue={setPassword}
              required
            />

            <p className="my-4">
              don&apos;t have an account?{' '}
              <CustomLink className="pb-1 dark:text-zinc-300" href="/register">
                register
              </CustomLink>
            </p>

            <Button className="w-full md:w-a" disabled={logginIn}>
              {logginIn ? (
                <AiOutlineLoading3Quarters className="animate-spin" />
              ) : (
                ''
              )}
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
