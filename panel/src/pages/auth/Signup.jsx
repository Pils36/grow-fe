import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  const [errorMsg, setErrorMsg] = useState('');
  const [data, setData] = useState({});
  const [formValid, setFormValid] = useState(false);
  const [passwordValid, setpasswordValid] = useState(false);
  const [form, setForm] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });


  useEffect(() => {
    if (
      form.userName !== "" &&
      form.email !== "" &&
      form.password !== "" &&
      form.confirmPassword !== ""
    ) {
      setFormValid(true);
    } else {
      setFormValid(false)
    }
    console.log({ ...form });
  }, [{ }]);

  useEffect(() => {
    if (form.password === form.confirmPassword && form.password !== "") {
      setpasswordValid(true);
    } else {
      setpasswordValid(false);
    }
  },[form.userName,
      form.email,
      form.password,
      form.confirmPassword]);
  

  const handleChange = (e) => {
    setForm({
      ...form, 
      [e.target.name]: e.target.value
    })

  }

  

  const submitHandler = (e) => {
    // const errorMsg = document.getElementById('error-msg')
    if (!formValid) {
      setErrorMsg('Please fill all fields');
    } else if (!passwordValid) {
      setErrorMsg('Passwords do not tally')
    } else {
      setErrorMsg('')

      setTimeout(() => {
        window.location = '/dashboard'
      }, 2000);
    }
    setData({ ...form })

    sessionStorage.setItem('userDetails', JSON.stringify({...form}));

    e.preventDefault();
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
          <form onSubmit={submitHandler}>
            {/* <input className={ formValid ? "good" : "bad" } onChange={handleChange} name='fullname' placeholder='Fullname' ></input> */}
            <input className='bg-transparent focus:outline-none mb-2 w-full p-2 rounded-md placeholder: text-xs' onChange={handleChange} name='userName' placeholder='Username' ></input>
            <input className='bg-transparent focus:outline-none mb-2 w-full p-2 rounded-md placeholder: text-xs invalid:border-red-600' onChange={handleChange} name='email' type='email' placeholder='Email' ></input>
            <input className='border bg-transparent focus:outline-none mb-2 w-full p-2 rounded-md placeholder: text-xs' onChange={handleChange} name='password' type='password' id='pwd' placeholder='Password'></input>
            <input className='border bg-transparent focus:outline-none mb-2 w-full p-2 rounded-md placeholder: text-xs' onChange={handleChange} name='confirmPassword' type='password' id='c-pwd' placeholder='Confirm Password' ></input>
            <input type='checkbox' onClick={togglePasswordVisibility} className='mb-3'></input><span className='text-xs text-gray-500 mx-2 '>Show Passwords</span>
            <p className='text-red-600 text-xs mb-2 italic'>{ errorMsg }</p>
            <button type='submit' className='p-2 rounded-md drop-shadow-md font-medium bg-green-900 text-white w-full hover:bg-white hover:text-green-900'>Sign up</button>
          </form>
          <p className='text-gray-500 text-xs mt-5 text-center'>Already have an account? <Link to='/login' className='underline hover:text-green-900'>Sign in</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Signup
