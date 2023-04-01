import React , {useState} from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import Image from 'next/image';
import Nav from './Components/Nav';

function index() {
  const [trendingMovies ,setTrendingMovies] = useState([])
  const [topRatedMovies ,settopRatedMovies] = useState([])
  const [upcomingMovies ,setUpcomingMovies] = useState([])
  const [nowPlaying ,setnowPlaying] = useState([])

  const { isLoading, error } = useQuery({
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
    <>
    <Nav />
      <div className='px-2 py-3 font-montserrat'>

        <h2 className='text-base sm:text-base md:text-base lg:text-lg xl:text-2xl 2xl:text-2xl'>Trending Movie's</h2>
          <Splide aria-label="Trending Movies" options={{fixedWidth: "176px", gap: "16px" , rewind: true , pauseOnHover: true , autoplay: true , interval: 3000 , type: 'slide' , rewindSpeed: 200}}>

    {trendingMovies.map((movie) => (
            <SplideSlide key={movie.id}>
              <Image src={movie.poster_path} width={500} height={500} alt="none" priority={true} />
              <div className='flex flex-col gap-2 justify-center items-center text-white absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 hover:bg-black hover:bg-opacity-60'>
                <h6 className='text-sm'>{movie.original_title}</h6>
                <p className='text-xs'>{movie.overview}</p>
              </div>
          </SplideSlide>
        ))}
        </Splide> 

        <h2 className='text-base sm:text-base md:text-base lg:text-lg xl:text-2xl 2xl:text-2xl'>Top Rated Movie's</h2>
          <Splide aria-label="Trending Movies" options={{fixedWidth: "176px", gap: "16px" , rewind: true , pauseOnHover: true , autoplay: true , interval: 3000 , type: 'slide' ,rewindSpeed: 400}}>
            
    {topRatedMovies.map((movie) => (
            <SplideSlide key={movie.id}>
              <Image src={movie.poster_path} width={500} height={500} alt="none" priority={true}/>
              <div className='flex flex-col gap-2 justify-center items-center text-white absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 hover:bg-black hover:bg-opacity-60'>
                <h6 className='text-sm'>{movie.original_title}</h6>
                <p className='text-xs'>{movie.overview}</p>
              </div>
          </SplideSlide>
        ))}
        </Splide> 


        <h2 className='text-base sm:text-base md:text-base lg:text-lg xl:text-2xl 2xl:text-2xl'>Upcoming Movie's</h2>
          <Splide aria-label="Trending Movies" options={{fixedWidth: "176px", gap: "16px" , rewind: true , pauseOnHover: true , autoplay: true , interval: 3000 , type: 'slide' , rewindSpeed: 300}}>
            
    {upcomingMovies.map((movie) => (
            <SplideSlide key={movie.id}>
              <Image src={movie.poster_path} width={500} height={500} alt="none" priority={true}/>
              <div className='flex flex-col gap-2 justify-center items-center text-white absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 hover:bg-black hover:bg-opacity-60'>
                <h6 className='text-sm'>{movie.original_title}</h6>
                <p className='text-xs'>{movie.overview}</p>
              </div>
          </SplideSlide>
        ))}
        </Splide> 


        <h2 className='text-base sm:text-base md:text-base lg:text-lg xl:text-2xl 2xl:text-2xl'>Now Playing Movie's</h2>
          <Splide aria-label="Trending Movies" options={{fixedWidth: "176px", gap: "16px" , rewind: true , pauseOnHover: true , autoplay: true , interval: 3000 , type: 'slide' , rewindSpeed: 200}}>
            
    {nowPlaying.map((movie) => (
            <SplideSlide key={movie.id}>
              <Image src={movie.poster_path} width={500} height={500} alt="none" priority={true}/>
              <div className='flex flex-col gap-2 justify-center items-center text-white absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 hover:bg-black hover:bg-opacity-60'>
                <h6 className='text-sm'>{movie.original_title}</h6>
                <p className='text-xs'>{movie.overview}</p>
              </div>
          </SplideSlide>
        ))}
        </Splide> 

    </div>
    </>
  );
}


export default index