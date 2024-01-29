import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-full aspect-video md:pt-36 px-10   md:px-12 absolute bg-gradient-to-r from-black'>
        <h1 className='text-xl md:text-4xl mt-28 font-bold text-white md:mt-8 hidden md:block'>{title}</h1>
        <p className="py-6 text-xs md:text-lg w-2/3 text-white md:mt-8 hidden md:block">{overview}</p>
        <div className='mt-40 md:mt-8'>
            <button className='bg-white text-black p-2 w-24 rounded-md hover:bg-opacity-85'>▶Play</button>
            <button className='bg-gray-500 text-white p-2 ml-4 rounded-md bg-opacity-50 hover:bg-opacity-25'>ℹ️More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle