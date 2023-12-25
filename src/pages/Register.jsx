import Button from '@/components/buttons/Button'
import Input from '@/components/form/Input'
import CustomLink from '@/components/links/CustomLink'
import { register } from '@/utilities/network-data'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useRef, useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const Register = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const nameRef = useRef('')
  const emailRef = useRef('')
  const passwordRef = useRef('')
  const passwordConfirmRef = useRef('')
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  })
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [registering, setRegistering] = useState(false)

  const registerHandler = async (data) => {
    setRegistering(true)
    const { error } = await register(data)
    return { error }
  }

  const onRegisterSubmitHandler = async (e) => {
    e.preventDefault()

    if (!nameValidationHandler()) {
      nameRef.current.focus()
      return
    }
    if (!emailValidationHandler()) {
      emailRef.current.focus()
      return
    }
    if (!passwordValidationHandler()) {
      passwordRef.current.focus()
      return
    }

    if (!passwordConfirmValidationHandler()) {
      passwordConfirmRef.current.focus()
      return
    }

    const data = {
      name,
      email,
      password,
    }

    toast.promise(
      registerHandler(data)
        .then(({ error }) => {
          if (error) throw new Error('Registration failed')
          navigate('/login')
        })
        .finally(() => setRegistering(false)),
      {
        loading: 'Loading',
        success: 'Registration successfully',
        error: (err) =>
          err.message ?? 'Something went wrong, please try again later!',
      }
    )
  }

  const nameValidationHandler = () => {
    if (!name) {
      setErrors((prev) => ({
        ...prev,
        name: 'Name is required',
      }))
      return false
    }
    setErrors((prev) => ({
      ...prev,
      name: '',
    }))
    return true
  }

  const emailValidationHandler = () => {
    if (!email) {
      setErrors((prev) => ({
        ...prev,
        email: 'Email is required',
      }))
      return false
    }
    if (email !== '' && !email.includes('@')) {
      setErrors((prev) => ({
        ...prev,
        email: 'Email is invalid',
      }))
      return false
    }
    setErrors((prev) => ({
      ...prev,
      email: '',
    }))
    return true
  }

  const passwordValidationHandler = () => {
    if (!password) {
      setErrors((prev) => ({
        ...prev,
        password: 'Password is required',
      }))
      return false
    }
    setErrors((prev) => ({
      ...prev,
      password: '',
    }))
    return true
  }

  const passwordConfirmValidationHandler = () => {
    if (!passwordConfirm) {
      setErrors((prev) => ({
        ...prev,
        passwordConfirm: 'Password confirmation is required',
      }))
      return false
    }
    if (passwordConfirm !== password) {
      setErrors((prev) => ({
        ...prev,
        passwordConfirm: 'Password confirmation is not match',
      }))
      return false
    }
    setErrors((prev) => ({
      ...prev,
      passwordConfirm: '',
    }))
    return true
  }

  return (
    <div className="min-h-main">
      <div className="my-8">
        <div className="text-center mb-6">
          <h1 className="mb-1">Register</h1>
          <p className="tracking-wider">Register to use the app, please</p>
        </div>
        <div className="flex justify-center">
          <form className="max-w-xl w-full" onSubmit={onRegisterSubmitHandler}>
            <label className="inline-block mb-2" htmlFor="nama">
              Nama
            </label>
            <Input
              id="nama"
              className={
                errors.name ? 'border-red-600 dark:border-red-400' : ''
              }
              placeholder="nama"
              value={name}
              setValue={setName}
              ref={nameRef}
              onBlur={nameValidationHandler}
              required
            />
            <p className="mt-2 mb-3 text-sm text-red-600 dark:text-red-400">
              {errors.name}
            </p>
            <label className="inline-block mb-2" htmlFor="email">
              Email
            </label>
            <Input
              id="email"
              className={
                errors.email ? 'border-red-600 dark:border-red-400' : ''
              }
              placeholder="email"
              type="email"
              value={email}
              setValue={setEmail}
              ref={emailRef}
              onBlur={emailValidationHandler}
              required
            />
            <p className="mt-2 mb-3 text-sm text-red-600 dark:text-red-400">
              {errors.email}
            </p>
            <label className="inline-block mb-2" htmlFor="password">
              Password
            </label>
            <Input
              id="password"
              className={
                errors.password ? 'border-red-600 dark:border-red-400' : ''
              }
              placeholder="******"
              type="password"
              value={password}
              setValue={setPassword}
              ref={passwordRef}
              onBlur={passwordValidationHandler}
              required
            />
            <p className="mt-2 mb-3 text-sm text-red-600 dark:text-red-400">
              {errors.password}
            </p>
            <label className="inline-block mb-2" htmlFor="passwordConfirm">
              Password Confirmation
            </label>
            <Input
              id="passwordConfirm"
              className={
                errors.passwordConfirm
                  ? 'border-red-600 dark:border-red-400'
                  : ''
              }
              placeholder="******"
              type="password"
              value={passwordConfirm}
              setValue={setPasswordConfirm}
              ref={passwordConfirmRef}
              onBlur={passwordConfirmValidationHandler}
              required
            />
            <p className="mt-2 mb-3 text-sm text-red-600 dark:text-red-400">
              {errors.passwordConfirm}
            </p>
            <p className="my-4">
              have an account?{' '}
              <CustomLink className="pb-1 dark:text-zinc-300" href="/login">
                Login
              </CustomLink>
            </p>
            <Button className="w-full md:w-a" disabled={registering}>
              {registering ? (
                <AiOutlineLoading3Quarters className="animate-spin" />
              ) : (
                ''
              )}
              Register
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
