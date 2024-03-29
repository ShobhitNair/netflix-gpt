import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className='w-24 px-1  md:w-48 md:pr-4 '>
        <img alt="MovieCard"
        src={IMG_CDN_URL + posterPath}
        />
    </div>
  )
}

export default MovieCard