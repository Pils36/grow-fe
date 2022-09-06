import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import logo from "../../components/images/Ellipse.png"
import { FaArrowLeft } from 'react-icons/fa';
import axios from 'axios';

const Notification = () => {
    const [myData, setMyData] = useState ()
    const [status, setStatus] = useState (false)
    const urlParams = new URLSearchParams(window.location.search)
    const userId = urlParams.get('id')


     
    useEffect (() => {
      const fetchUsers = async () => {
        try{ 
          const requestOptions = {
            method: "GET",
            url: "https://api-v1-staging.growng.company/api/v1/admin/notification" + userId,
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer " + localStorage.token
            }
          }
      const res = await axios (requestOptions)
          setMyData(res.data.data);

          setStatus(true);
        }catch(err){
        console.log(err);
      }
    }
        fetchUsers()
    },[])
    return (
        <div>
            <div className='mx-20 mt-7 mb-3'>
                <div className='flex justify-between'>
                    <div className='flex gap-10'>
                        <Link to="/dashboard"><img className="logo" src={ logo } alt="Logo" /></Link>
                        <div>
                            <Link to='/dashboard' className='flex'>
                                <FaArrowLeft  className='flex mt-1 text-[#404040]'/>
                                <h1 className='text-[#404040] font-medium'>Back</h1>
                            </Link>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <h1 className='text-[#404040]'>Admin name</h1>
                        <AccountCircleOutlinedIcon  className='text-[#404040]'/>
                    </div>
                </div>

                <div className='mt-7'>
                    <h1 className='text-[18px] font-[500] text-[#404040]'>Notifications</h1>
                </div>

                <div className='bg-[#074028] h-[24px] rounded-[5px] my-1'></div>
                {
                    status ?
                
                <div key={myData.notification}>
                    <div className='flex justify-between bg-[#F1F0F0] px-3 py-2 mt-3'>
                        <div>
                            <h2 className='text-[16px] font-[500] text-[#404040]'>{myData.information}</h2>
                            <p className='text-[#808080] text-[14px] font-[400]'>“Clearing of land” for farm B on 6th July, 2000</p>
                        </div>

                        <div className='flex gap-2'>
                            <h1 className='text-[#404040] text-[12px]'>3rd June, 2000</h1>
                            <p className='text-[#404040] text-[12px]'>12:33pm</p>
                        </div>
                    </div>
                </div> : 'loading...'
                }
            </div>
        </div>
    )
}

export default Notification
