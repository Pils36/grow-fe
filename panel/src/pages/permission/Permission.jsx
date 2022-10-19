import React from 'react'
import { FaRegTimesCircle } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Permission = () => {
  return (
    <div className='mx-[400px] my-[30px] admin'>
    <div className='bg-[#074028] py-3 flex justify-between px-4'>
      <h1 className='text-[16px] text-white'>Roles and Permissions</h1>
      <FaRegTimesCircle className='flex items-center w-6 h-6 text-white'/>
    </div>

    <div className='px-5'>
      
      <div className='pt-7 mb-16'>
        <div className="roles_perm">
          <h1 className='roles_head'>Admin details</h1>
          <div className="perms_line"></div>
        </div>

        <div className='flex pt-2'>
          <input type="checkbox" className='h-7 w-7 mt-2 cursor-pointer accent-[#074028]'/>
          <div className='px-2 pt-2 flex'>
            <div>
                <h1 className='text-[16px] font-medium text-[404040]'>Create content</h1>
                <p className='text-[14px] text-[404040]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
            <MdDelete className='w-9 h-9 flex my-4 cursor-pointer'/>
          </div>
        </div>

        <div className='flex py-6'>
          <input type="checkbox" className='h-7 w-7 mt-2 cursor-pointer accent-[#074028]'/>
          <div className='px-2'>
            <h1 className='text-[16px] font-medium text-[404040]'>Edit content</h1>
            <p className='text-[14px] text-[404040]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          </div>
          <MdDelete className='w-9 h-9 flex my-4 cursor-pointer'/>
        </div> 

        <div className="roles_perm my-3">
          <h1 className='roles_head'>Add new Permission</h1>
          <div className="perms_line"></div>
        </div>
        <div>
            <textarea name="" id="" cols="40" rows="5" placeholder='type here' className='border border-gray-400 ml-4 mt-5 px-5 rounded-md'></textarea>
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

export default Permission