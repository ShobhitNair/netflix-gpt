import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)

    const toggleSignInForm = () =>{
        setIsSignInForm(!isSignInForm)
    }
  return (
    <div >
        <Header/>
        <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/eed3a573-8db7-47ca-a2ce-b511e0350439/IN-en-20240122-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='bg'/>
        </div>
        
    <form className='absolute w-3/12 bg-black  p-12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
        <h1 className='font-bold text-3xl -ml-2 mb-4'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
        {!isSignInForm && <input type='name' placeholder='Name' className='px-11 py-2 -ml-1 mb-2 bg-gray-900'/>}
        <input type='text' placeholder='Email Address' className='px-11 py-2 -ml-1 mb-2 bg-gray-900'/>
        <input type='password' placeholder='Password' className='px-11 py-2 -ml-1 bg-gray-900'/>
        <button className='px-28 py-2 mt-6 -ml-1  bg-red-700'>{isSignInForm ? 'Sign In' : 'SignUp'}</button>
        <p className='p-2 mt-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? 'New to Netflix? Sign In Now' : 'Already Registered? Sign Up Now..'}</p>
    </form>
    </div>
  )
}

export default Login