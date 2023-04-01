import React, {useState} from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

function index() {
  const {isLoading , error , data} = useQuery({
    queryKey: ['movieIndexData'],
    queryFn: () => axios.get("http://localhost:3000/api/movie")
  })
  console.log(data)

if (isLoading) return 'Loading...'

if (error) return 'An error has occurred: ' + error.message

return (
    <div className='font-montserrat'>movie index</div>
  )
}

export default index