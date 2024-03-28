import React, { useEffect, useState } from 'react';
import { useUserContext } from '../contexts/UserProvider';
import {useHistory, Redirect } from 'react-router-dom';
import UIinputField from './UIinputField';
import UIButton from './UIButton';

export default function AuthenticationView({ isLogin }) {
   const [ email , setEmail] = useState('');
   const [ password , setPassword] = useState('');
   const history = useHistory();

   const {doLogin , doSignUp , error , clearErrors, user } = useUserContext(); 
  
   const title = isLogin ? "Login" : "Sign Up" ;

   const handleAuthentication = (event) => {
    event.preventDefault();
    console.log({doLogin , doSignUp , error});
    (isLogin ? doLogin : doSignUp)(email , password)
  }

  useEffect(() => {
    clearErrors();
  } , [isLogin])

  // useEffect(()=>{
  //   if(user){
  //   history.push('/');
  //   }
  // }, [user])

  if(user) return <Redirect to='/'/>

  return (
    <form onSubmit={handleAuthentication} className='bg-blue-100  rounded max-w-xs mx-auto mt-8 p-4'>
        <h2 className='bg-blue-200 p-4 my-4 rounded'>{title}</h2>
        { error && <div className='text-red-500 p-2 m-2 border-b-2 border-red-700'> {error}</div> }
        <UIinputField 
        type="email"
        placeholder='Email'
        value={email}
        onChange={e => setEmail(e.target.value)}
        />
        <UIinputField 
        type="password"
        placeholder='Password'
        value={password}
        onChange={e => setPassword(e.target.value)}
        />
        <UIButton >{title}</UIButton>
    </form>
  )
}
