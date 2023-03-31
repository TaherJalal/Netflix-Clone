import React , {useState} from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { Splide, SplideSlide } from '@splidejs/react-splide';

function index() {
  const [trendingMovies ,setTrendingMovies] = useState([])
  const [topRatedMovies ,settopRatedMovies] = useState([])
  const [upcomingMovies ,setUpcomingMovies] = useState([])
  const [nowPlaying ,setnowPlaying] = useState([])

  

const options: SplideOptions = {
      direction: 'ltr'
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
    <div>

{trendingMovies.map((movie) => (
  <Splide aria-labeledby="Trending Movie's" options={options}>
    <SplideSlide>
    {movie?.original_title}
  </SplideSlide> 
  </Splide> 
 ))}
       
    </div>
  )
}

export default index