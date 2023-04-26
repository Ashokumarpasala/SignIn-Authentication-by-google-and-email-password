import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import auth from '../config'
import HomePage from './HomePage'
import SignPage from './SignPage'

const UseAuth = () => {
  console.log('auth',auth);
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
   onAuthStateChanged(auth, (user) => {
    user ? setCurrentUser({
      uid:user.uid,
      email:user.email, 
    }) : setCurrentUser(null)
   })
  }, [])
  return (
    <center>
       {currentUser ? <HomePage />: <SignPage />}
    </center>
  )
}

export default UseAuth
