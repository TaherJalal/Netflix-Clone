import React, {useState} from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Nav from '../Components/Nav'
import Image from 'next/image'

function index() {
  const {isLoading , error , data} = useQuery({
    queryKey: ['movieIndexData'],
    queryFn: () => axios.get("http://localhost:3000/api/movie")
  })
  console.log(data)

if (isLoading) return 'Loading...'

if (error) return 'An error has occurred: ' + error.message

return (
  <>
    <Nav />
    <div className='font-montserrat h-screen w-screen dark:bg-zinc-950 dark:text-white bg-white text-black grid gap-x-4 gap-y-4 gap-4 grid-cols-6 grid-rows-3 '>
    {
      data?.data.results.map((movie:any) => (
        <div>
          <Image src={movie.poster_path == null ? "public/next.svg" : movie.poster_path} width={500} height={500} alt="none" priority={true} />
              <div className='flex flex-col gap-2 justify-center items-center text-white absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 hover:bg-black hover:bg-opacity-60'>
                <h6 className='text-sm'>{movie.original_title}</h6>
                <p className='text-xs'>{movie.overview}</p>
              </div>
        </div>
      ))
    }

    </div>
    </>
  )
}

export default index