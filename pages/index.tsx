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
      axios.get('http://localhost:3000/api/landingpage' , {
         headers : {Authorization: localStorage.getItem("token")}
      }),
      onSuccess: (data) => {
        setTrendingMovies(data.data[0].movies)
        settopRatedMovies(data.data[1].movies)
        setUpcomingMovies(data.data[2].movies)
        setnowPlaying(data.data[3].movies)
      },
  }) 

  const goToMovieDetailsPage = (movieId:number) => {
    window.location.href =`http://localhost:3000/movies/${movieId}`;
  }

  
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
    <div className='dark:bg-zinc-950 dark:text-white bg-white text-black'>
    <Nav />
      <div className='px-2 py-3 font-montserrat'>

        <h2 className='text-base sm:text-base md:text-base lg:text-lg xl:text-2xl 2xl:text-2xl pb-2 pt-3'>Trending Movie's</h2>
          <Splide aria-label="Trending Movies" options={{fixedWidth: "176px", gap: "16px" , rewind: true , pauseOnHover: true , autoplay: true , interval: 3000 , type: 'slide' , rewindSpeed: 200 , arrows: false}}>

    {trendingMovies.map((movie) => (
            <SplideSlide key={movie.id}>
            
              <Image src={movie.poster_path} width={500} height={500} alt="none" priority={true} />
              <div className='flex flex-col gap-2 justify-center items-center text-white absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 hover:bg-black hover:bg-opacity-60' onClick={()=> goToMovieDetailsPage(movie.id)}>
                <h6 className='text-sm'>{movie.original_title}</h6>
                <p className='text-xs'>{movie.overview}</p>
              </div>
              
          </SplideSlide>
        ))}
        </Splide> 

        <h2 className='text-base sm:text-base md:text-base lg:text-lg xl:text-2xl 2xl:text-2xl pb-6 pt-3'>Top Rated Movie's</h2>
          <Splide aria-label="Trending Movies" options={{fixedWidth: "176px", gap: "16px" , rewind: true , pauseOnHover: true , autoplay: true , interval: 3000 , type: 'slide' ,rewindSpeed: 400, arrows: false}}>
             
    {topRatedMovies.map((movie) => (
            <SplideSlide key={movie.id}>
              <Image src={movie.poster_path} width={500} height={500} alt="none" priority={true} />
              <div className='flex flex-col gap-2 justify-center items-center text-white absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 hover:bg-black hover:bg-opacity-60' onClick={()=> goToMovieDetailsPage(movie.id)}>
                <h6 className='text-sm'>{movie.original_title}</h6>
                <p className='text-xs'>{movie.overview}</p>
              </div>
          </SplideSlide>
        ))}
        </Splide> 


        <h2 className='text-base sm:text-base md:text-base lg:text-lg xl:text-2xl 2xl:text-2xl pb-6 pt-3'>Upcoming Movie's</h2>
          <Splide aria-label="Trending Movies" options={{fixedWidth: "176px", gap: "16px" , rewind: true , pauseOnHover: true , autoplay: true , interval: 3000 , type: 'slide' , rewindSpeed: 300, arrows: false}}>
            
    {upcomingMovies.map((movie) => (
            <SplideSlide key={movie.id}>
              <Image src={movie.poster_path} width={500} height={500} alt="none" priority={true} />
              <div className='flex flex-col gap-2 justify-center items-center text-white absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 hover:bg-black hover:bg-opacity-60' onClick={()=> goToMovieDetailsPage(movie.id)}>
                <h6 className='text-sm'>{movie.original_title}</h6>
                <p className='text-xs'>{movie.overview}</p>
              </div>
          </SplideSlide>
        ))}
        </Splide> 


        <h2 className='text-base sm:text-base md:text-base lg:text-lg xl:text-2xl 2xl:text-2xl pb-6 pt-3'>Now Playing Movie's</h2>
          <Splide aria-label="Trending Movies" options={{fixedWidth: "176px", gap: "16px" , rewind: true , pauseOnHover: true , autoplay: true , interval: 3000 , type: 'slide' , rewindSpeed: 200, arrows: false}}>
            
    {nowPlaying.map((movie) => (
            <SplideSlide key={movie.id}>
              <Image src={movie.poster_path} width={500} height={500} alt="none" priority={true} />
              <div className='flex flex-col gap-2 justify-center items-center text-white absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 hover:bg-black hover:bg-opacity-60' onClick={()=> goToMovieDetailsPage(movie.id)}>
                <h6 className='text-sm'>{movie.original_title}</h6>
                <p className='text-xs'>{movie.overview}</p>
              </div>
          </SplideSlide>
        ))}
        </Splide> 

    </div>
    </div>
  );
}


export default index