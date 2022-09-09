import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import './addcrops.scss'
import baseurl from "../../constants/baseurl"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Addcrops = () => {

    const [crops, setCrops] = useState('');
    const [category, setCategory] = useState('');
    const [status, setStatus] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        handleSubmit();
    }, [])


    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            const data = {
                name: crops,
                category: category
            }

            const config = {
                method: 'post',
                url: `${baseurl()}/crop/create`,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.token
                },
                data
            }

            await axios(config);


            setTimeout(() => {
                navigate('/crops');
            }, 1000);

        } catch (error) {
            console.log(error);
        }
    }

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
                      <input type="textarea" placeholder='' className='inputy' onChange={(e) => setCrops(e.target.value)} value={crops}/>
                </form>

                <br/>
                <br/>

                  <form className="input">
                      <label>Crop Category</label>
                      <input type="textarea" placeholder='' className='inputy' onChange={(e) => setCategory(e.target.value)} value={category} />
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
                      <button className='save' onClick={handleSubmit}>Save</button>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Addcrops