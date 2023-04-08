import React, {useState} from 'react'
import { useQuery } from '@tanstack/react-query'
import Nav from '../Components/Nav'
import axios from 'axios'
import { useRouter } from 'next/router'

function movieId() {

    const router = useRouter()
    const {id} = router.query

    const [movies, setMovies] = useState([])

    const {isLoading , error} = useQuery({
        queryKey:["movieData"],
        queryFn: () => axios.get(`http://localhost:3000/api/movie/${id}`),
        onSuccess(data) {
            setMovies(data.data)
        },
    })

    console.log(movies)

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
    <div>
        <Nav />
    </div>
  )
}

export default movieId