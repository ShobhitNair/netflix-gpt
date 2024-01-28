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
    <div className="overscroll-contain">
      <Header />
      <div className="absolute">
        <img
          src={BACKGROUND_IMG}
          alt="bg"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 bg-black  p-12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
      >
        <h1 className="font-bold text-3xl -ml-2 mb-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="name"
            placeholder="Name"
            className="px-11 py-2 -ml-1 mb-2 bg-gray-900"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="px-11 py-2 -ml-1 mb-2 bg-gray-900"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="px-11 py-2 -ml-1 bg-gray-900"
        />
        <p className="text-red-500 font-bold text-lg p-2">{errorMessage}</p>
        <button
          className="px-28 py-2 mt-6 -ml-1  bg-red-700"
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
  );
};

export default Login;
