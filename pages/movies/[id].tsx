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
        queryKey:["movieData"],
        queryFn: () => axios.get(`http://localhost:3000/api/movie/${id}` , {
            headers: {Authorization: localStorage.getItem("token")}
        })
        
    })

    console.log(data)

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
    <div className='overflow-hidden dark:bg-zinc-950 dark:text-white bg-white text-black'>
        <Nav />
        <div>
            <Image src={"https://image.tmdb.org/t/p/original" + data?.data.poster_path} width={600} height={600} alt='hhh' priority={true}/>
            {/* <img src={"https://image.tmdb.org/t/p/original" + data?.data.poster_path} alt="" className='w-3/4 h-1/4'/> */}
        </div>
    </div>
  )
}

export default movieId