import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
  const gpt = useSelector((store)=> store.gpt);
  const {movieResults, movieNames} = gpt;
  if(!movieNames) return null;
  return (
    <div className='bg-black'> 
    <div>
      {movieNames.map((movieName ,index) =><MovieList key={movieName} title={movieName} movies={movieResults[index]}/> )}
    
    </div>
      
    </div>
  )
}

export default GptMovieSuggestions