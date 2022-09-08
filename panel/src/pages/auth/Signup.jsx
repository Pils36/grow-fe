import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import baseurl from '../../constants/baseurl';

const Signup = () => {

  const [fullName, setFullName] = useState('')
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()


  async function signUp(e) {

    try {

      e.preventDefault()
      let item = { fullname: fullName, username: userName, email, password }

      let result = await fetch(`${baseurl()}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(item)
      })
      const response = await result.json()

      if (response.data.length === 0) return alert(response.message);

      alert(`Registration successful`);
      navigate("/login")

    } catch (error) {
      if (error.response) {
        alert(error.response.message);
      }
      else {
        alert(error.message);
      }

    }


  }

  const togglePasswordVisibility = () => {
    const pwd = document.getElementById('pwd')
    const Cpwd = document.getElementById('c-pwd')

    if (pwd.type && Cpwd.type === "password") {
      pwd.type = 'text'
      Cpwd.type = 'text'
    } else {
      pwd.type = 'password'
      Cpwd.type = 'password'
    }
  }




  return (
    <div>
      <div className='container font-Poppins'>
        <div className='w-1/2 bg-white shadow shadow-green-900 rounded-lg p-20 my-20 mx-auto'>

          <h2 className='mb-6 text-green-900 text-xl font-semibold text-center'>Sign Up</h2>
          <form>
            {/* <input className={ formValid ? "good" : "bad" } onChange={handleChange} name='fullName' placeholder='FullName' ></input> */}
            <input className='bg-transparent focus:outline-none mb-2 w-full p-2 rounded-md placeholder: text-xs' value={fullName} onChange={(e) => setFullName(e.target.value)} name='fullName' placeholder='FullName' ></input>
            <input className='bg-transparent focus:outline-none mb-2 w-full p-2 rounded-md placeholder: text-xs invalid:border-red-600' value={userName} onChange={(e) => setUserName(e.target.value)} name='userName' type='text' placeholder='Username' ></input>
            <input className='bg-transparent focus:outline-none mb-2 w-full p-2 rounded-md placeholder: text-xs invalid:border-red-600' value={email} onChange={(e) => setEmail(e.target.value)} name='email' type='text' placeholder='Email' ></input>
            <input className='border bg-transparent focus:outline-none mb-2 w-full p-2 rounded-md placeholder: text-xs' value={password} onChange={(e) => setPassword(e.target.value)} name='password' type='password' id='pwd' placeholder='Password' ></input>
            <input className='border bg-transparent focus:outline-none mb-2 w-full p-2 rounded-md placeholder: text-xs' value={password} onChange={(e) => setPassword(e.target.value)} name='confirmPassword' type='password' id='c-pwd' placeholder='Confirm Password' ></input>
            <input type='checkbox' onClick={togglePasswordVisibility} className='mb-3'></input><span className='text-xs text-gray-500 mx-2 '>Show Passwords</span>
            {/* <p className='text-red-600 text-xs mb-2 italic'>{ errorMsg }</p> */}
            <button type='submit' onClick={signUp} className='p-2 rounded-md drop-shadow-md font-medium bg-green-900 text-white w-full hover:bg-white hover:text-green-900'>Sign up</button>
          </form>
          <p className='text-gray-500 text-xs mt-5 text-center'>Already have an account? <Link to={'/login'} className='underline hover:text-green-900'>Sign in</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Signup
