import Link from 'next/link'
import React, {useState , useEffect} from 'react'

function Nav() {

  const [token , setToken] = useState<any>("")

  useEffect(() => {
   setToken(localStorage.getItem("token")) 
},[token])

token ? console.log(true) : console.log(false)
  return (
    <div className='py-3 px-5 flex justify-between font-semibold text-sm sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-lg font-montserrat dark:bg-zinc-950 dark:text-white'>
        <div className='flex flex-nowrap gap-7'>
            <Link href={'/'}>Home</Link>
            <Link href={'/movies'}>Movie's</Link>
            <Link href={'/shows'}>Show's</Link>
        </div>
        

<div className='flex flex-nowrap gap-7'>
  
  {
    token ? (
      <div className='flex gap-5'>
  <Link href={'user/cart'}>Cart</Link>
  <Link href={'user/wishlist'}>Wishlist</Link>
  <Link href={'user/profile'}>Profile</Link>

      </div>
    ) : (
      <div>
  <Link href={'auth/Signin'}>Sign-In / Register</Link>

      </div>
    )
  }
</div>
    </div>
  )
}

export default Nav