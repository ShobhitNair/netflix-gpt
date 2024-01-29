import React from 'react'
import MovieCard from './MovieCard'


const MovieList = ({title,movies}) => {
    const movieCards = Array.isArray(movies)
    ? movies.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path} />)
    : null;
  return (
    <div className='px-6  '>
            <h1 className='text-3xl py-6 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll no-scrollbar'>
            <div className='flex '>
              {movieCards}
            </div>
        </div>
    </div>
  )
}

export default MovieList