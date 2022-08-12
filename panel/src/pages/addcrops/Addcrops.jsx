import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import './addcrops.scss'

const addCrops = () => {
  return (
    <div className='addCrops'>
        <div className="addcropsbar">
            <Sidebar />
        </div>

        <div className="addcropscontainer">
            <div className="addcropshead">
                <div className="addcropsleft">
                    <h1>Crops</h1>
                    <p>Contains all crops on your database</p>
                </div>
                <div className="addcropsright">
                    <NotificationsActiveOutlinedIcon className="noti" />
                    <h2>Admin name</h2>
                    <AccountCircleOutlinedIcon />
                </div>
            </div>

            <div className="addcropsbottom">
                <form className="input">
                    <label>Crop name</label>
                    <input type="textarea" placeholder='' className='inputy'/>
                </form>

                <div className="thumbnail">
                    <h1>Add crop thumbnail</h1>
                    <div className="thumnailImage">
                        <img src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" alt="" />
                        <h1>Select file from your computer folders</h1>
                    </div>
                    <button>Upload</button>
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

export default addCrops