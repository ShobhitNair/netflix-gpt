import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-full aspect-video md:py-20 px-10   md:px-12 absolute bg-gradient-to-r from-black'>
      <div className='py-8 sm:py-14 md:py-28'>
      <h1 className='text-xl md:text-2xl mt-28 font-bold text-white md:mt-8 hidden md:block'>{title}</h1>
        <p className="py-6 text-xs md:text-xs  md:w-2/3 text-white md:mt-8 hidden  md:block">{overview}</p>
        <div className='mt-40 md:-my-0 '>
            <button className='bg-white text-black p-2 w-24 rounded-md hover:bg-opacity-85'>▶Play</button>
            <button className='bg-gray-500 text-white p-2 ml-4 rounded-md bg-opacity-50 hover:bg-opacity-25'>ℹ️More Info</button>
        </div>
      </div>
        
    </div>
  )
}

export default VideoTitle