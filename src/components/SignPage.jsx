import React, { useState } from 'react'
import  auth from '../config'
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'


function SignPage() {
  const [signUp, setSignUp]= useState(false)
  const navigate = useNavigate()
  const [data, setData] = useState({
    user:'',
    email: '',
    password:''
  })
  const {email, password, user} = data

  const handleChange =(e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const handleSignUp =(e) => {
    console.log('sign Up trigger')
    e.preventDefault()
    const signUp = createUserWithEmailAndPassword(auth, email, password).then(user => console.log({user})).then(navigate('/home'))
    return () =>{
      signUp()
    }
  }
  const handleSignIn =(e) =>{
    console.log('sign in triger')
    e.preventDefault()
    const signIn = signInWithEmailAndPassword(auth, email, password).then(user => console.log({user}))
    return () =>{
      signIn()
    }
  }

  const handleGoogleAccount = (e) => {
    e.preventDefault()
    const googleSignUp =   signInWithPopup(auth, new GoogleAuthProvider(auth))
     return () => {
      googleSignUp()
     }
  }

  const linkSingnUp = (e) => {
    e.preventDefault()
    setSignUp(true)
    navigate('/')
  }

  return (
    <center className='card w-50 container mt-5'>
      <div className='card-body'>
        <h1>Sign Page</h1>
        <form action="">
           {
            signUp &&  <input type="text" name='user' value={user} onChange={handleChange} placeholder='Enter UserName' /> 
  } <br /> <br />
          <input type="email" name='email'  value={email} onChange={handleChange} placeholder='Enter email' /> <br /> <br />
          <input type="password" name='password'  value={password} onChange={handleChange} placeholder='Enter password' /> <br /> <br />
                {/* <button onClick={handleSignUp} className='btn btn-success'>
                    Sign Up
                </button>  &nbsp; &nbsp;  */}
                <button onClick={!signUp ? handleSignIn : handleSignUp}  className='btn btn-success'>
                  {
                    !signUp ? 'Sign In' : 'Sign Up' 
                  }
                </button>
        </form>
        <p className='mt-2'>Don't Have an Account ? please <a href="/" onClick={linkSingnUp}>Sign Up</a></p>
        <p>
           Sign In With <a href='/' className='badge bg-secondary' onClick={handleGoogleAccount}> 
           <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
          <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
        </svg> {' '}
           Google Account</a></p>
      </div>

    </center>
  )
}

export default SignPage
