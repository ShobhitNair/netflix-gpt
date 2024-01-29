import React from 'react'

const GptSearchBar = () => {
  return (
    <div>
        <form className='bg-black p-20'>
            <input type='text' className='ml-12 mt-6 p-1 px-20 rounded-md w-1/3'  placeholder='What would you like to watch today?'/>
            <button className='bg-red-600 m-5 p-2 rounded-lg'>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar