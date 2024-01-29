import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, USER_AVATAR } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';

const Header = () => {
  const showGptSearch = useSelector((store)=> store.gpt.showGptSearch)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store)=>store.user);
  const handleSignOut = () =>{
    signOut(auth).then(() => {
    }).catch((error) => {
        navigate('/error')
    });
  }
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            
            const {uid,email,displayName} = user;
            dispatch(addUser({uid: uid, email: email, displayName: displayName}))
              navigate("/browse")
          } else {
            dispatch(removeUser());
           navigate("/")
          }
        });
        return ()=> unsubscribe();
  },[]);

  const handleGptSearchClick = () =>{
    dispatch(toggleGptSearchView());
  }
  
  return (
    <div className='w-full absolute bg-gradient-to-b from-black   md:pr-60 pl-10 mr-24 md:mr-0 md:px-20 py-2  z-20 flex flex-col md:flex-row justify-between '>
        <img className='w-48 mx-1 md:m-0 ' src={LOGO} alt='logo'/>
        {user && <div className='flex flex-col md:flex-row w-36 md:w-12 h-12 -mt-14 md:mt-5 ml-48 sm:ml-44 md:mr-14 mr-1'>
          <button className=' px-6 mr-6  md:my-1  bg-gray-500 opacity-50 rounded-md hover:opacity-20 text-white' onClick={handleGptSearchClick}>{showGptSearch ?  "Back" : "Search" }</button>
          <img className='hidden md:block ' src={USER_AVATAR}/>
          <button className='text-white md:ml-2 my-1  px-6 mr-6 md:mr-0 md:my-1  rounded-md bg-red-500' onClick={handleSignOut}>SignOut</button>
        </div>}
    </div>
  )
}

export default Header;