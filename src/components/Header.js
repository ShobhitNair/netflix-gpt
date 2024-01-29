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
    <div className='w-screen absolute bg-gradient-to-b from-black pr-52 pl-28 py-2   z-20 flex justify-between '>
        <img className='w-48 ' src={LOGO} alt='logo'/>
        {user && <div className='flex w-12 h-12'>
          <button className=' px-6 mr-6 my-1 bg-gray-500 opacity-50 rounded-md hover:opacity-20 text-white' onClick={handleGptSearchClick}>{showGptSearch ?  "Back" : "Search" }</button>
          <img className='' src={USER_AVATAR}/>
          <button className='text-white px-2' onClick={handleSignOut}>SignOut</button>
        </div>}
    </div>
  )
}

export default Header;