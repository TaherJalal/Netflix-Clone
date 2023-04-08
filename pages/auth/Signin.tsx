import React, {useState, useEffect} from 'react'
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Nav from '../Components/Nav'
import Link from 'next/link'
import axios from 'axios'

function Signin() {

    const [emailAddress , setEmailAddress] = useState<string>("")
    const [password , setPassword] = useState<string>("") 
    const [token , setToken] = useState<string>("")

    useEffect(() => {
        console.log(token)
    },[token])

const post = async (e:any) => {
    
    e.preventDefault()
    const { data } = await axios.post("http://localhost:3000/api/auth/signin", {
        emailAddress,
        password
      });

    setToken(data)
    localStorage.setItem("token" , data.token)
}



  return (
    
      <div className='font-montserrat dark:bg-zinc-950 dark:text-white bg-white text-black h-screen overflow-hidden'>
        <Nav />
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-slate-950 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign-in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={post}>

                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" onChange={(e) => setEmailAddress(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required={true} />
                  </div>

                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
                  </div>
          
                  
                  <button  className="w-full text-white bg-cyan-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create an account</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don't have an account? <Link href="Signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign-Up</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>

    </div>
  )
}

export default Signin