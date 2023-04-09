import React, {useState} from 'react'
import { useQuery } from '@tanstack/react-query'
import Nav from '../Components/Nav'
import axios from 'axios'
import { useRouter } from 'next/router'
import Image from 'next/image'

function movieId() {

    const router = useRouter()

    const {id} = router.query

    const {isLoading , error, data} = useQuery({
        queryKey:["movieData", id],
        queryFn: async () => await axios.get(`http://localhost:3000/api/movie/${id}` , {
            headers: {Authorization: localStorage.getItem("token")}
        })
        
    })

    if (isLoading) return ( 
        <div className='dark:bg-zinc-950 dark:text-white bg-white text-black h-screen'>
        Loading...
        </div> )
      
        if (error) return ( 
        <div className='dark:bg-zinc-950 dark:text-white bg-white text-black h-screen'>
          {'An error has occurred: ' + error.message}
        </div> 
        )

  return (
    <div className='overflow-hidden dark:bg-zinc-950 dark:text-white bg-white text-black h-screen font-montserrat'>
        <Nav />
        <div className='flex justify-evenly'>
            <Image src={"https://image.tmdb.org/t/p/original" + data?.data.poster_path} width={600} height={600} alt='hhh' priority={true} />
            <div className='flex flex-col gap-60 content-center text-center'>
                <h3 className='text-4xl'>{data?.data.title}</h3>
                <p className='text-2xl'>{data?.data.overview}</p>
                <p className='text-2xl'>Rating: {data?.data.vote_average}</p>
            </div>
        </div>
    </div>
  )
}

export default movieId