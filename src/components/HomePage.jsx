import { signOut } from 'firebase/auth'
import React from 'react'
import auth from '../config'

const HomePage = () => {
  return (
    <center className='container'>
      <h1>Home page | wellcome User</h1>
      <img src="https://t3.ftcdn.net/jpg/02/58/76/84/360_F_258768431_nkWjbhmEyV6Kd50Ur9pQtR6Nz7lWY0vB.jpg"  alt=""  />
      <p className='card w-50 m-5 p-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta molestias, repellat consectetur mollitia fugiat nesciunt recusandae vero quod sit debitis facere. Quis voluptatum nesciunt eveniet, qui quam vero tempora debitis eos iure blanditiis nisi voluptatem, veritatis harum ducimus commodi maiores. Dicta animi harum eius, molestiae totam vel qui nobis necessitatibus!</p>
       <button onClick={() => signOut(auth)} className='btn btn-danger'>Sign Out</button>
    </center>
  )
}

export default HomePage
