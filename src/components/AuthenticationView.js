import React, { useEffect, useState } from 'react';
import { useUserContext } from '../contexts/UserProvider';

export default function AuthenticationView({ isLogin }) {
   const [ email , setEmail] = useState('');
   const [ password , setPassword] = useState('');

   const {doLogin , doSignUp , error , clearErrors } = useUserContext(); 
  
   const title = isLogin ? "Login" : "Sign Up" ;

   const handleAuthentication = (event) => {
    event.preventDefault();
    console.log({doLogin , doSignUp , error});
    (isLogin ? doLogin : doSignUp)(email , password)
  }

  useEffect(() => {
    clearErrors();
  } , [isLogin])

  return (
    <form onSubmit={handleAuthentication}>
        <h2>{title}</h2>

        <div>
        { error && <div> {error}</div> }
        </div>
        <input 
        type="email"
        placeholder='email'
        value={email}
        onChange={e => setEmail(e.target.value)}
        className='border-solid border-gray-600 m-4'
        />
        <input 
        type="password"
        placeholder='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
        className='border-solid border-gray-600 m-4'
        />
        <button className= 'border-solid border-gray-600 m-4 bg-slate-400 rounded px-4' >{title}</button>
    </form>
  )
}
