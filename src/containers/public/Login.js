import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import icons from '../../ultis/icons'

const { FaEye, FaEyeSlash } = icons
const Login = () => {
  const [isShowPassword, setIsShowPassword] = useState(false)
  const navigate = useNavigate()
  const handleNavigateSignUp = () => {
    navigate('/sign-up')
  }
  return (
    <div className='m-auto w-[600px]'>
      <div className='relative flex flex-col justify-center min-h-screen overflow-hidden'>
        <div className='w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl border border-main-500'>
          <h1 className='text-3xl font-semibold text-center text-main-500'>
            SIGN IN
          </h1>
          <form className='mt-6'>
            <div className='mb-2'>
              <label
                for='email'
                className='block text-sm font-semibold text-gray-800'
              >
                Email
              </label>
              <input
                type='email'
                className='block w-full px-4 py-2 mt-2 text-main-500 bg-white border rounded-md focus:border-main-500 focus:ring-main-500 focus:outline-none focus:ring focus:ring-opacity-40'
              />
            </div>
            <div className='mb-2'>
              <label
                for='password'
                className='block text-sm font-semibold text-gray-800'
              >
                Password
              </label>
              <div className='relative'>
                <span
                  onClick={() => setIsShowPassword(!isShowPassword)}
                  className='z-10 absolute top-3 right-2'
                >
                  {isShowPassword ? <FaEye /> : <FaEyeSlash />}
                </span>

                <input
                  type={isShowPassword ? 'text' : 'password'}
                  className='block w-full px-4 py-2 mt-2 text-main-500 bg-white border rounded-md focus:border-main-500 focus:ring-main-500 focus:outline-none focus:ring focus:ring-opacity-40'
                />
              </div>
            </div>
            <a href='!#' className='text-xs text-main-500 hover:underline'>
              Forget Password?
            </a>
            <div className='mt-6'>
              <button className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-main-500 rounded-md hover:opacity-70 focus:outline-none focus:bg-main-500'>
                Login
              </button>
            </div>
          </form>

          <p className='mt-8 text-xs font-light text-center text-gray-700'>
            {' '}
            Don't have an account?{' '}
            <span
              className='font-medium text-main-500 hover:underline cursor-pointer'
              onClick={handleNavigateSignUp}
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
