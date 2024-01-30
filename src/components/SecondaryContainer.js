import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store=> store.movie)
  return (
    <div className=' bg-black px-6 md:px-0'>
      <div className='mt-0 sm:-mt-40 md:-my-2  md:pl-4 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"TopRated"} movies={movies.topRatedMovies}/>
    </div>
    </div>
  )
}

export default SecondaryContainer