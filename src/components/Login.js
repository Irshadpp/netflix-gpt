import React, { useRef, useState } from 'react'
import Header from './Header'
import { validateFormData } from '../utils/validate';

const Login = () => {

    const [loginPage, setLoginPage] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignup = () =>{
        setLoginPage(!loginPage);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        let message;
        if(loginPage){
            message = validateFormData(null, email.current.value, password.current.value);
        }else{
            message = validateFormData(name.current.value, email.current.value, password.current.value);
        }
        setErrorMessage(message)
    }

  return (
    <div>
       <Header/> 
        <div className='absolute'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="bgImage" />
        </div>
        <form onSubmit={(e)=>handleSubmit(e)}
         className='w-4/12 absolute p-12 bg-black opacity-85 my-36 mx-auto left-0 right-0 text-white'>
        <h1 className='font-bold text-3xl text-white'>{loginPage ? "Sign In" : "Sign Up"}</h1>
        {!loginPage && <input ref={name} type="text" placeholder='Full Name' className='p-4 my-4 bg-gray-700 w-full rounded-md' required/>}
            <input ref={email} type="text" placeholder='Email Address' className='p-4 my-4 bg-gray-700 w-full rounded-md'/>
            <input ref={password} type="password" placeholder='Password' className='p-4 my-4 bg-gray-700 w-full rounded-md'/>
            <p className='text-red-600'>{errorMessage}</p>
            <button className='p-4 my-4 bg-red-700 w-full rounded-md'>{loginPage ? "Login" : "Sign Up"}</button>
            <p className='text-gray-400 cursor-pointer'
            onClick={toggleSignup}>
                {
                    loginPage ? "New to Netflix? Sign Up Now" : "Already have an account? Sign In Now"
                }
            </p>
        </form>
    </div>
  )
}

export default Login
