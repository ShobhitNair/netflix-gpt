import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store=> store.movie)
  return (
    <div className=' bg-black px-10 md:px-0'>
      <div className='mt-0 md:-mt-80  md:pl-4 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"TopRated"} movies={movies.topRatedMovies}/>
    </div>
    </div>
  )
}

export default SecondaryContainer