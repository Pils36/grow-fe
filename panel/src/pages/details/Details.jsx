import React from 'react'
import { FaRegTimesCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import "./details.scss"

const Details = () => {
  return (
    <div className='mx-[400px] my-[30px] admin'>
    <div className='bg-[#074028] py-3 flex justify-between px-4'>
      <h1 className='text-[16px] text-white'>Admin details</h1>
      <FaRegTimesCircle className='flex items-center w-6 h-6 text-white'/>
    </div>

    <div className='px-5'>
      <div>
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

      <div className='pt-7 mb-16'>
        <div className="roles_perm">
          <h1 className='roles_head'>Roles and Permissions</h1>
          <div className="perms_line"></div>
        </div>

        <div className='flex pt-2'>
          <input type="checkbox" className='h-7 w-7 mt-2 cursor-pointer accent-[#074028]'/> 
          <div className='px-2 pt-2'>
            <h1 className='text-[16px] font-medium text-[404040]'>Create content</h1>
            <p className='text-[14px] text-[404040]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          </div>
        </div>

        <div className='flex pt-6'> 
          <input type="checkbox" className='h-7 w-7 mt-2 cursor-pointer accent-[#074028]'/>
          <div className='px-2'>
            <h1 className='text-[16px] font-medium text-[404040]'>Edit content</h1>
            <p className='text-[14px] text-[404040]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          </div>
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

export default Details