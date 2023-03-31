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

  console.log(trendingMovies)
  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
      <div className='px-3'>
        <h2>Trending Movies</h2>
          <Splide aria-label="Trending Movies" options={{fixedWidth: "176px", gap: "16px" , rewind: true , pauseOnHover: true , autoplay: true , interval: 3000 , type: 'slide'}}>
            
    {trendingMovies.map((movie) => (
            <SplideSlide key={movie.id}>
              <img src={movie.poster_path} width={500} height={500} alt="none"/>
            {/* <div className="flex flex-col w-44 h-52 bg-slate-300 gap-4 rounded text-sm"> */}
              {/* {movie} */}
            {/* </div> */}
          </SplideSlide>
        ))}
        </Splide> 
    </div>
    
  );
}


export default index