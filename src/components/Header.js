import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store)=>store.user);
  const handleSignOut = () =>{
    signOut(auth).then(() => {
      navigate('/');
    }).catch((error) => {
        navigate('/error')
    });
  }
  return (
    <div className='w-screen absolute bg-gradient-to-b from-black px-16 py-2   z-10 flex justify-between '>
        <img className='w-48 ' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo'/>
        {user && <div className='flex w-12 h-12'>
          <img className='' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHv-Ga0Qg90F9CTloSMXpOUe-o5lL_6Pu9GrDOWqU2pk7EcdwldSl8SIIObT8sfyKeujM&usqp=CAU'/>
          <button className='text-white px-2' onClick={handleSignOut}>Sign Out</button>
        </div>}
    </div>
  )
}

export default Header;