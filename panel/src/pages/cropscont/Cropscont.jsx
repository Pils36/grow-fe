import React, { useState, useEffect } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Select from 'react-select'
import './cropscont.scss'
import axios from 'axios';
import baseurl from '../../constants/baseurl';
import { useNavigate } from 'react-router-dom'

const Cropscont = () => {

    const options = [
        { value: 'module 1', label: 'Module 1' },
        { value: 'module 2', label: 'Module 2' },
        { value: 'module 3', label: 'Module 3' },
        { value: 'module 4', label: 'Module 4' },
        { value: 'module 5', label: 'Module 5' }
    ];
    const navigate = useNavigate();
    const [crop, setCrop] = useState('')
    const [module, setModule] = useState('')
    const [title, setTitle] = useState('')
    const [subTitle, setSubTitle] = useState('')
    const [content, setContent] = useState('')


    const data = {
        crop,
        module,
        title,
        subTitle,
        content
    };

    const submit = async (e) => {

        try {

            e.preventDefault();

            const config = {
                method: 'post',
                url: `${baseurl()}/knowledge/create`,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.token
                },
                data: {...data}
            }

            await axios(config);

            alert('Knowledge hub created successfully');

            setTimeout(() => {
                navigate('/knowledge');
            }, 1000);

            
        } catch (error) {
            console.log(error);
        }

    }


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
                      <input type="text" placeholder='' className='inputy' onChange={(e) => setCrop(e.target.value)} id='crop' value={crop}/>
                </form>
                <div className='dropdown'>
                    <h1>Select Modules</h1>
                      {/* <Select options={options} onChange={(e) => setSelected(e.target.value)} id='module' value={data.module}/> */}
                      <select className="form-control form-select" id="module" onChange={(e) => setModule(e.target.value )} value={module} required>
                          <option value="">Select title</option>
                          <option value="Module 1">Module 1</option>
                          <option value="Module 2">Module 2</option>
                          <option value="Module 3">Module 3</option>
                          <option value="Module 4">Module 4</option>
                          <option value="Module 5">Module 5</option>
                      </select>
                </div>

                <div className="flex">
                    <form className="cropsinput">
                        <label>Module title</label>
                          <input type="text" placeholder='type here' className='inputy' onChange={(e) => setTitle(e.target.value )} id='title' value={title}/>
                    </form>

                    <form className="cropsinput">
                        <label>Module sub-title</label>
                          <input type="text" placeholder='type here...' className='inputy' onChange={(e) => setSubTitle(e.target.value )} id='subTitle' value={subTitle}/>
                    </form>
                </div>

                <div className="lastbottom">
                    <div className='textarea'>
                        <h1>Module content</h1>
                          <textarea name="Module content" className='text' cols="30" rows="10" onChange={(e) => setContent( e.target.value )} id='content' value={content}></textarea>
                    </div>

                    <div className="thumbnail">
                        <h1>Add crop thumbnail</h1>
                        <div className="thumnailImage">
                        <img src={`https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg`} alt="" />
                            <input type="file" multiple accept='image/*' placeholder='Select file from your computer folders' onChange={onImageChange} />
                        </div>
                    </div>
                </div> 

                <div className='btnsb'>
                    <button className='cans' onClick={() => navigate('/knowledge')}>Cancel</button>
                    <button className='save' onClick={submit}>Save</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cropscont