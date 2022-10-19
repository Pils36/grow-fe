import React, { useState, useEffect } from 'react'
import { FaRegTimesCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './editadmin.scss'

const Editadmin = () => {

    const [images, setImages] = useState ([])
    const [imageURLs, setImageURLs] = useState ([])

    useEffect(() => {
        if (images.length < 1) return
        const newImageUrls = []
        images.forEach(image => newImageUrls.push(URL.createObjectURL(image)))
        setImageURLs(newImageUrls)
    }, [images])

    function onImageChange(e) {
        setImages([...e.target.files])
    }


    return (
        <div className='mx-[400px] my-[30px] admin'>
        <div className='bg-[#074028] py-3 flex justify-between px-4'>
          <h1 className='text-[16px] text-white'>Add new Admin</h1>
          <FaRegTimesCircle className='flex items-center w-6 h-6 text-white'/>
        </div>
  
        <div className='px-5'>

            <div className='mt-10'>
                <h1 className='text-[16px] font-semibold text-[#404040]'>Edit profile</h1>
                <p className='text-[14px] font-medium text-[#808080]'>Change profile picture</p>

                <div className="thumbnailedit">
                        <div className="thumnailImage">
                        <img src={`https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg`} alt="" />
                        </div>
                    </div>
                    <input type="file" multiple accept='image/*' placeholder='Select file from your computer folders' onChange={onImageChange}/>
            </div>


            <div className='mb-20'>
                <div className="roles_perm mt-5">
                    <h1 className='roles_head'>Admin details</h1>
                <div className="perms_line"></div>
            </div>
            <div className='flex justify-between gap-8 py-4 input_up'>
              <div>
                <h1 className='text-[11px] font-medium text-[#074028] pl-2'>Enter first name</h1>
                <input type="text" placeholder='type here' className='border border-[#074028] rounded-md px-4 py-2 text-sm text-[#074028] outline-none input_name'/>
              </div>
  
              <div>
                <h1 className='text-[11px] font-medium text-[#074028] pl-2'>Enter last name</h1>
                <input type="text" placeholder='type here' className='border border-[#074028] rounded-md px-4 text-sm text-[#074028] outline-none input_name'/>
              </div>
            </div>
            <div className='flex justify-between gap-8 py-2 input_up'>
              <div>
                <h1 className='text-[11px] font-medium text-[#074028] pl-2'>Enter phone number</h1>
                <input type="text" placeholder='type here' className='border border-[#074028] rounded-md px-4 text-sm text-[#074028] outline-none input_name'/>
              </div>
  
              <div>
                <h1 className='text-[11px] font-medium text-[#074028] pl-2'>Enter email address</h1>
                <input type="text" placeholder='type here' className='border border-[#074028] rounded-md px-4 text-sm text-[#074028] outline-none input_name'/>
              </div>
            </div>
              <div>
                <h1 className='text-[11px] font-medium text-[#074028] pl-2'>Enter role</h1>
                <input type="text" placeholder='Email address' className='border border-[#074028] rounded-md px-4 text-sm text-[#074028] outline-none w-full email'/>
              </div>
          </div>
        </div>
  
        <div className='bg-gray-200 flex justify-end gap-6 py-3 px-5'>
          <button className='border border-gray-300 py-2 px-6 rounded-md text-[#404040] bg-transparent drop-shadow-lg hover:bg-[#074028] hover:text-[#ffffff]'>Cancel</button>
          <Link to='/details'><button className='py-2 px-6 rounded-md text-[#ffffff] bg-[#074028] drop-shadow-lg hover:bg-gray-200 hover:text-black'>Done</button></Link>
        </div>
      </div> 
    )
}

export default Editadmin
