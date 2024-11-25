import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_LOGO } from '../utils/constants';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const {email, displayName, uid, photoURL} = user;
              dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL:photoURL}));
              navigate('/browser');
            } else {
              dispatch(removeUser());
              navigate('/');
            }
          });
          return () => unsubscribe();
          },[]);


    const handleSignOot = () =>{
signOut(auth).then(() => {
  dispatch(removeUser())})
  .catch((error) => {
  navigate('/error');
});
    }
  return (
    <div className='absolute w-screen justify-between flex bg-gradient-to-b from-black'>
        <img className='w-48 mx-32' src={NETFLIX_LOGO} alt="logo" />
        {user && (
        <div className='flex'>
        <p className='text-white text-xl font-bold my-5 mx-2'>{user?.displayName}</p>
        <img className='w-10 h-10 my-4' src={user?.photoURL} alt='logo'/>
        <button
        onClick={handleSignOot}
        className='bg-red-600 p-1 h-8 my-6 rounded-md mx-2'>Sign Out</button>
        </div>
        )
        }
    </div>
  )
}

export default Header;
