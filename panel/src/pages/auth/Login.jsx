import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"



const Login = () => {

  const [username, setUsername] = useState ("")
  const [password, setPassword] = useState ("")


  const navigate = useNavigate()
  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate("/dashboard")
    }
  }, [])
  
  async function login(e){
      e.preventDefault()
      let item ={username,password}
      let result = await fetch("https://api-v1-staging.growng.company/api/v1/admin/auth/login",{
        method: "POST",
        headers:{
          "Content-Type": "application/json",
        },
        body:JSON.stringify(item)
      })
      result = await result.json()
      localStorage.setItem("token", result.token);
      localStorage.setItem("user", JSON.stringify(result.data));
      navigate("/dashboard")
       
    }


   function signUp(fields, success) {
      return function(dispatch) {
          axios.post("https://api-v1-staging.growng.company/api/v1/admin/auth/login", fields)
              .then(response => {
                  const { token } = response.data;
                  localStorage.setItem('token', token);
                  localStorage.getItem('token');
                  dispatch({
                      
                      payload: response.data
                  })
                  success()
              })
              .catch(err => {
                  if(err) { console.log(err) }
              })
      }
  }




  return (
      <div>
      <div className='container font-Poppins'>
        <div className='w-1/2 bg-white shadow shadow-green-900 rounded-lg p-20 my-20 mx-auto'>
          
          <h2 className='mb-6 text-green-900 text-xl font-semibold text-center'>Login</h2>
          <form>
            <input className='border bg-transparent focus:outline-none mb-2 w-full p-2 rounded-md invalid:border-bkred  placeholder: text-xs' type='text' name='email' placeholder='Username' onChange={(e)=>setUsername(e.target.value)}></input>
            <input className='border bg-transparent focus:outline-none mb-2 w-full p-2 rounded-md placeholder: text-xs' name='password' type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}></input>
            <p className='text-bkred text-xs mb-2 italic'></p>
            <button type='submit' className=' w-full p-2 rounded-md drop-shadow-md font-medium bg-green-900 text-white hover:bg-white hover:text-green-900 text-xs' onClick={login}>Log in</button>
          </form>
          <p className='text-gray-500 text-xs mt-5 text-center'>Don't have an account yet? <Link to='/signup' className='underline hover:text-green-900'>Sign Up</Link></p>
        </div>
      </div>
    </div>
  )
}


export default Login