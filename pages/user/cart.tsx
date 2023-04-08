import React , {useState} from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

function cart() {
  const [movie, setMovies] = useState<any>("")
  const [balance, setBalance] = useState<number>()

  const {isLoading, error} = useQuery({
    queryKey: ["cartData"],
    queryFn: () => axios.get("http://localhost:3000/api/cart" ,{
      headers: {Authorization: localStorage.getItem("token")}
    }),
    onSuccess:(data) => {
      setMovies(data.data.userCart)
      setBalance(data.data.userbalance)
    },
  })

  console.log(movie)

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div className='dark:bg-zinc-950 dark:text-white bg-white text-black h-screen'>
d
    </div>
  )
}

export default cart