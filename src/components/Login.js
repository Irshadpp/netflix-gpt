import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateFormData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMAGE, USER_LOGO } from "../utils/constants";

const Login = () => {
    const dispatch = useDispatch();
  const [loginPage, setLoginPage] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignup = () => {
    setLoginPage(!loginPage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let message;
    if (loginPage) {
      message = validateFormData(
        null,
        email.current.value,
        password.current.value
      );
    } else {
      message = validateFormData(
        name.current.value,
        email.current.value,
        password.current.value
      );
    }
    setErrorMessage(message);
    if (message) return;
    if (!loginPage) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: USER_LOGO
                  }).then(() => {
            const { uid, email, displayName, photoURL} = auth.currentUser;
            dispatch(addUser({uid:uid, email:email, displayName: displayName, photoURL: photoURL}));
          }).catch((error) => {
            setErrorMessage(error.message)
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
        return;
    }

signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => { 
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorMessage);
  });
  };

  return (
    <div>
      <div className="absolute">
      <Header/>
        <img
          src={BG_IMAGE}
          alt="bgImage"
        />
      </div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="w-4/12 absolute p-12 bg-black opacity-85 my-36 mx-auto left-0 right-0 text-white"
      >
        <h1 className="font-bold text-3xl text-white">
          {loginPage ? "Sign In" : "Sign Up"}
        </h1>
        {!loginPage && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 bg-gray-700 w-full rounded-md"
            required
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 bg-gray-700 w-full rounded-md"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 bg-gray-700 w-full rounded-md"
        />
        <p className="text-red-600">{errorMessage}</p>
        <button className="p-4 my-4 bg-red-700 w-full rounded-md">
          {loginPage ? "Login" : "Sign Up"}
        </button>
        <p className="text-gray-400 cursor-pointer" onClick={toggleSignup}>
          {loginPage
            ? "New to Netflix? Sign Up Now"
            : "Already have an account? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
