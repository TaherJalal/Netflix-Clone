import React, {useState,useEffect} from 'react'
import Nav from '../Components/Nav'

function profile() {

    const [token , setToken] = useState("")

    useEffect(() => {
      localStorage.getItem("token")
  },[token])
  

  return (
    <div className='dark:bg-zinc-950 dark:text-white bg-white text-black h-screen'>
        <Nav />
        profile
    </div>
  )
}

export default profile