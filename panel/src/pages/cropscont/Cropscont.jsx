import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Select from 'react-select'
import './cropscont.scss'

const Cropscont = () => {

    const options = [
        { value: 'module 1', label: 'Module 1' },
        { value: 'module 2', label: 'Module 2' },
        { value: 'module 3', label: 'Module 3' },
        { value: 'module 4', label: 'Module 4' },
        { value: 'module 5', label: 'Module 5' }
      ]

  return (
    <div className='addCrops'>
        <div className="addcropsbar">
            <Sidebar />
        </div>

        <div className="addcropscontainer">
            <div className="addcropshead">
                <div className="addcropsleft">
                    <h1>Knowledge Hub</h1>
                </div>
                <div className="addcropsright">
                    <NotificationsActiveOutlinedIcon className="noti" />
                    <h2>Admin name</h2>
                    <AccountCircleOutlinedIcon />
                </div>
            </div>

            <div className="addcropsbottoms">
                <h1>Crops</h1>
                <p>Contains all crops on your database</p>
                <form className="cropsinput">
                    <label>Crop name</label>
                    <input type="text" placeholder='' className='inputy'/>
                </form>
                <div className='dropdown'>
                    <h1>Select Modules</h1>
                    <Select options={options} />
                </div>

                <div className="flex">
                    <form className="cropsinput">
                        <label>Module title</label>
                        <input type="text" placeholder='type here' className='inputy'/>
                    </form>

                    <form className="cropsinput">
                        <label>Module sub-title</label>
                        <input type="text" placeholder='type here...' className='inputy'/>
                    </form>
                </div>

                <div className="lastbottom">
                    <div className='textarea'>
                        <h1>Module content</h1>
                        <textarea name="Module content" className='text' cols="30" rows="10"></textarea>
                    </div>

                    <div className="thumbnail">
                        <h1>Add crop thumbnail</h1>
                        <div className="thumnailImage">
                            <img src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" alt="" />
                            <h1>Select file from your computer folders</h1>
                        </div>
                    </div>
                </div>

                <div className='btnsb'>
                    <button className='cans'>Cancel</button>
                    <button className='save'>Save</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cropscont