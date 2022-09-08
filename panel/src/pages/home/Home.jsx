import React from 'react'
import { Link } from 'react-router-dom'
import Garden from '../../components/images/Garden.png'
import Logo from '../../components/images/Ellipse.png'


const Home = () => {
  return ( 
    <div className='mx-11'>
        <div className='flex justify-between'>
            <img src={Logo} alt=""  className='w-20 h-9 mt-9 flex items-center'/>
            <div className='flex gap-11'>
                <Link to='/signup'><button className='py-2 px-6 bg-green-900 shadow-md text-white rounded-md hover:bg-white hover:text-green-900 mt-10'>Sign Up</button></Link>
                <Link to='/login'><button className='py-2 px-6 bg-green-900 shadow-md text-white rounded-md hover:bg-white hover:text-green-900 mt-10'>Login</button>  </Link>
            </div>
        </div>


        <div className='mx-20 container flex items-center justify-between font-Poppins'>
              <div id='content ' className='w-[50%] '>
                  <h1 className='text-6xl font-bold text-gray-700 '><span className='text-green-900'>Farming</span> just got easier</h1>
                  <p className='text-lg w-4/5 text-gray-500 mt-5'>Digitizing and simplifying access to extention services and productivity tools to support farmers operattions.</p>
                  <Link to='/signup'><button className='py-2 px-6 bg-green-900 shadow-md text-white rounded-md hover:bg-white hover:text-green-900 mt-10'>Get Started</button>  </Link>
              </div>
              <div className='w-[50%]'>
                <img className='mt-16' src={Garden} alt=''></img>
              </div> 
          </div>
    </div>    
  )
}

export default Home