import React from 'react'
import Nav from '../Components/Nav'
import Link from 'next/link'

function Signin() {
  return (
    
      <div className='font-montserrat dark:bg-zinc-950 dark:text-white bg-white text-black h-screen overflow-hidden'>
        <Nav />
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create an account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">

                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required={true} />
                  </div>

                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
                  </div>
          
                  
                  <button type="submit" className="w-full text-white bg-cyan-500   font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Create an account</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don't have an account? <Link href="auth/Signin" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Create Account Here</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>

    </div>
  )
}

export default Signin