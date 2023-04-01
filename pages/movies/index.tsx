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
    <div className='font-montserrat pt-8 pl-20 dark:bg-zinc-950 dark:text-white bg-white text-black grid gap-4 grid-cols-4 grid-rows-6'>
    {
      data?.data.results.map((movie:any) => (
        <div className='relative'>
          <Image src={"https://image.tmdb.org/t/p/original" + movie.poster_path == null ? "/next.svg" : "https://image.tmdb.org/t/p/original" + movie.poster_path} width={224} height={224} alt="none" priority={true} />

          <div className='w-56 flex flex-col justify-center items-center absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 hover:bg-black hover:bg-opacity-60'>
              <h5 className='text-sm'>{movie.original_title}</h5>
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