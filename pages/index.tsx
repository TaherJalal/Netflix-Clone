import React , {useState} from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';

function index() {
  const [trendingMovies ,setTrendingMovies] = useState([])
  const [topRatedMovies ,settopRatedMovies] = useState([])
  const [upcomingMovies ,setUpcomingMovies] = useState([])
  const [nowPlaying ,setnowPlaying] = useState([])

  const { isLoading, error, data } = useQuery({
    queryKey: ['landingPageData'],
    queryFn: () =>
      axios.get('http://localhost:3000/api/landingpage'),
      onSuccess: (data) => {
        setTrendingMovies(data.data[0].movies)
        settopRatedMovies(data.data[1].movies)
        setUpcomingMovies(data.data[2].movies)
        setnowPlaying(data.data[3].movies)
      },
  }) 
  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
      <div className='px-3'>
          <Splide options={{fixedWidth: "176px"}}>
    {trendingMovies.map((movie) => (
            <SplideSlide key={movie.id}>
            <div className="flex flex-col w-44 h-52 bg-slate-300">
              {movie.id}
            </div>
          </SplideSlide>
        ))}
        </Splide> 
    </div>
    
  );
}


export default index