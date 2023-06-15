import React, { useRef } from 'react'
import {auth} from '../firebase'
import './Signin.css'

const SignInScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) =>{
    e.preventDefault();

    auth
    .createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    )
    .then((authUser) =>{
      console.log(authUser);

    })
    .catch((error) =>{
      alert(error.message)
    })
  };
  const signIn = (e) =>{
    e.preventDefault();
  };
  return (
    <div className='SignInScreen'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder='Email' type='email'/>
        <input ref={passwordRef} placeholder='Password' type='password'/>
        <button type='submit'>Sign In</button>

        <h4><span className='SignInScreen_gray'>New to Netflix? </span><a className='decor'>Sign Up now.</a></h4>
      </form>
    </div>
  )
}

export default SignInScreen