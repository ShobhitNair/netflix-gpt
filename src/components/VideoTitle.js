import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-36 px-12 absolute bg-gradient-to-r from-black'>
        <h1 className='text-4xl font-bold text-white mt-8'>{title}</h1>
        <p className="py-6 text-lg w-2/3 text-white mt-8">{overview}</p>
        <div className='mt-8'>
            <button className='bg-white text-black p-2 w-24 rounded-md hover:bg-opacity-85'>▶Play</button>
            <button className='bg-gray-500 text-white p-2 ml-4 rounded-md bg-opacity-50 hover:bg-opacity-25'>ℹ️More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle