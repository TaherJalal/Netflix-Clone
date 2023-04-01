import Link from 'next/link'
import React from 'react'

function Nav() {
  return (
    <div className='py-3 px-5 flex justify-between font-bold text-sm sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-lg'>
        <div className='flex flex-nowrap gap-7'>
            <Link href={'/'}>Home</Link>
            <Link href={'/movies'}>Movie's</Link>
            <Link href={'/shows'}>Show's</Link>
        </div>
        

        <Link href={'auth/Signin'}>Sign-In / Register</Link>

    </div>
  )
}

export default Nav