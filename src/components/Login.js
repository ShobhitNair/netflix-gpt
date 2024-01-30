import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND_IMG } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch()
  const name = useRef(null)
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value
          }).then(() => {
            const {uid,email,displayName} = auth.currentUser;
            dispatch(addUser({uid: uid, email: email, displayName: displayName}))
           
            
          }).catch((error) => {
            setErrorMessage(error.message)
          });
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        setErrorMessage(errorCode + '-' + errorMessage)
        });
    } else {
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + '-' + errorMessage)
        });

    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="h-5/6 md:overflow-y-hidden items-center justify-center">
      <Header />
      <div className="">
        <img className="absolute w-full h-full "
          src={BACKGROUND_IMG}
          alt="bg"
        />
      </div>
<div className="absolute flex items-center justify-center w-full h-full">
<form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-9/12 sm:w-7/12 md:w-4/12 md:flex md:flex-col  bg-black p-3 sm:p-10 md:p-10 my-36  text-white bg-opacity-80"
      >
        <h1 className="font-bold text-3xl  mb-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="name"
            placeholder="Name"
            className=" sm:px-10 md:px-16 py-2 m-2  mb-2 bg-gray-900"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className=" sm:px-10 md:px-16  py-2 m-2 mb-2 bg-gray-900"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className=" sm:px-10 md:px-16 py-2 m-2  bg-gray-900"
        />
        <p className="text-red-500 font-bold text-lg p-2">{errorMessage}</p>
        <button
          className="px-4  sm:px-16 md:px-16 py-4 m-2 mt-6   bg-red-700"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "SignUp"}
        </button>
        <p className="p-2 mt-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign In Now"
            : "Already Registered? Sign Up Now.."}
        </p>
      </form>
</div>
      
    </div>
  );
};

export default Login;
