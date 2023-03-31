import React , {useState} from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { Options, Splide, SplideSlide } from '@splidejs/react-splide';

function index() {
  const [trendingMovies ,setTrendingMovies] = useState([])
  const [topRatedMovies ,settopRatedMovies] = useState([])
  const [upcomingMovies ,setUpcomingMovies] = useState([])
  const [nowPlaying ,setnowPlaying] = useState([])

  

const options: Options = {
  direction: 'ltr',
};
  

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

  console.log(trendingMovies)

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div className='px-3'>
{trendingMovies.map((movie) => (
  <Splide options={options.direction}>
    <SplideSlide>
    {movie?.original_title}
  </SplideSlide> 
  </Splide> 
 ))}      
 <br />

 {topRatedMovies.map((movie) => (
  <Splide options={options.direction}>
    <SplideSlide>
    {movie?.original_title}
  </SplideSlide> 
  </Splide> 
 ))} 
    </div>
  )
}

export default index