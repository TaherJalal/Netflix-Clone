import React , {useState} from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Image from 'next/image'
import Nav from '../Components/Nav'

function cart() {
  const [movies, setMovies] = useState<any>([])

  const {isLoading, error} = useQuery({
    queryKey: ["cartData"],
    queryFn: () => axios.get("http://localhost:3000/api/wishlist" ,{
      headers: {Authorization: localStorage.getItem("token")}
    }),
    onSuccess:(data) => {
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
    <div className='dark:bg-zinc-950 dark:text-white bg-white text-black h-screen font-montserrat'>
      <Nav />
      <div className='flex gap-6 pl-10 pt-5'>
      {movies.map((movie:any) => (
        <div key={movie.id} className='relative'>
          <Image src={"https://image.tmdb.org/t/p/original" + movie.poster_path} width={200} height={200} alt="none" priority={true} />
          <div className='flex flex-col gap-2 justify-center items-center text-white absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 hover:bg-black hover:bg-opacity-60'>
            <h6 className='text-sm'>{movie.original_title}</h6>
            <p className='text-xs'>{movie.overview}</p>
          </div>
        </div>
      ))}
</div>
    </div>
  )
}

export default cart