import React , {createContext, useContext, useState} from 'react';
import { firebaseApp } from '../fireBase';
import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword } from 'firebase/auth'; 

const UserContext = createContext({
    user : null,
    error : null
})

const FIREBASE_AUTH_ERRORS = {
    'auth/invalid-email' : "Invalid Email, Please enter a valid email",
    'auth/invalid-credential' : "Invalid Password , Please enter a Valid Email/ Password",
    'auth/missing-password' : 'Please enter a Password',
    'auth/email-already-in-use' : 'Email already exists',
    'auth/weak-password' : 'Please enter  a strong password'
}

function UserProvider({children}) {
  const [user , setUser] = useState(null);
  const [error , setError ] = useState(null);
  const auth = getAuth(firebaseApp);

  const doLogin = (email , password) => {
    clearErrors();
    signInWithEmailAndPassword(
        auth,
        email,
        password
        ).then( res => {
            console.log("Login Res", res)
            setUser(res.user)
        }).catch( error => {
            var msg = FIREBASE_AUTH_ERRORS[error.code]
            console.log( " Login error", error.code , msg);
            setError(msg)
        } )
  } 

  const doSignUp = (email , password) => {
    clearErrors();
    createUserWithEmailAndPassword(
        auth,
        email,
        password
        ).then( res => {
            console.log("SignUp Res", res)
            setUser(res.user)
        }).catch( error => {
            var msg = FIREBASE_AUTH_ERRORS[error.code]
            console.log( " SignUp error", error.code , msg);
            setError(msg)
        } )
  }  
  
  const logout = () => {
    setUser(null)
  } 

  const clearErrors = () => {
    setError(null)
  }

  return (
    <UserContext.Provider value={{
        user,
        error,
        doLogin,
        doSignUp,
        logout,
        clearErrors
    }}>
      {children}
    </UserContext.Provider>
  )
}


export const useUserContext = () => useContext(UserContext);
export default UserProvider;