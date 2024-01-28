import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, USER_AVATAR } from '../utils/constants';

const Header = () => {
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
  
  return (
    <div className='w-screen absolute bg-gradient-to-b from-black px-16 py-2   z-10 flex justify-between '>
        <img className='w-48 ' src={LOGO} alt='logo'/>
        {user && <div className='flex w-12 h-12'>
          <img className='' src={USER_AVATAR}/>
          <button className='text-white px-2' onClick={handleSignOut}>Sign Out</button>
        </div>}
    </div>
  )
}

export default Header;