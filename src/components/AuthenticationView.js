import React, { useState } from 'react';
import {firebaseApp} from '../fireBase';
import {getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword } from 'firebase/auth'

export default function AuthenticationView({ isLogin }) {
   const [ email , setEmail] = useState('');
   const [ password , setPassword] = useState('');
   const title = isLogin ? "Login" : "Sign Up" ;

   const handleAuthentication = (event) => {
    const formData = {
      email,
      password
    }
    console.log(title, isLogin, formData)
    event.preventDefault();

    const auth = getAuth(firebaseApp);

    if(isLogin){
      signInWithEmailAndPassword(auth, email, password)
      .then(res => console.log("res", res))
    }else{
      createUserWithEmailAndPassword(auth, email, password)
      .then(fireRes => console.log(fireRes))
      .catch(error => console.log(error))
    }
  }

  return (
    <form onSubmit={handleAuthentication}>
        <h2>{title}</h2>
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
