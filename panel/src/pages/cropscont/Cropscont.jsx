import React, { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Select from 'react-select'
import './cropscont.scss'
import axios from 'axios';

const Cropscont = () => {

    const options = [
        { value: 'module 1', label: 'Module 1' },
        { value: 'module 2', label: 'Module 2' },
        { value: 'module 3', label: 'Module 3' },
        { value: 'module 4', label: 'Module 4' },
        { value: 'module 5', label: 'Module 5' }
    ]

    const [crop, setCrop] = useState ('')
    const [module, setModule] = useState ('')
    const [title, setTitle] = useState ('')
    const [subTitle, setSubTitle] = useState ('')
    const [content, setContent] = useState ('')
    const [data, setData] = useState ({
        crop: '',
        module: '',
        title: '',
        subTitle: '',
        content: '',
    })
    function handle(e){
        const newData={...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }

    const submit = (e) => {
        e.preventDefault()
        axios({
            method: 'post',
            url: 'https://api-v1-staging.growng.company/api/v1/admin/knowledge/create',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.token
              },
            data: {
              crop: data.crop,
              module: data.module,
              title: data.title,
              subTitle: data.subTitle,
              content: data.content
            },    
          }) .then(res => console.log('omooooooo', res.data)).catch(err => console.log(err))
    }

//     const handlecropname = (event) => {
//         const crop_name = event.target.value
//         console.log(crop_name)
//         setCropname(crop_name)
//     }

//     const handlemodules = (event) => {
//         const modules = event.target.value
//         console.log(modules)
//         setModules(modules)
//     }

//     const handletitle = (event) => {
//         const title = event.target.value
//         console.log(title)
//         setTitle(title)
//     }

//     const handlesubtitle = (event) => {
//         const subtitle = event.target.value
//         console.log(subtitle)
//         setSubtitle(subtitle)
//     }

//     const handlemodulecontent = (event) => {
//         const modulecontent = event.target.value
//         console.log(modulecontent)
//         setModulecontent(modulecontent)
//     }

//    const submitContent = async (e) => {
//         e.preventDefault()
//         const contentData = {crop_name:cropname, title:title}

//         await axios.post('https://api-v1-staging.growng.company/api/v1/admin/knowledge/cropcontents', JSON.stringify(contentData))
//         .then(res => {
//             setCropname(res.data.crop)
//             setTitle(res.data.title)
//             console.log(res.data)
//         })
//    }

    

    // axios.post('https://api-v1-staging.growng.company/api/v1/admin/knowledge/cropcontents', newContent)
    // .then(res => {
    //     console.log(res.data)
    // })

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
                    <input type="text" placeholder='' className='inputy' onChange={(e)=>handle(e)} id='crop' value={data.crop}/>
                </form>
                <div className='dropdown'>
                    <h1>Select Modules</h1>
                    <Select options={options} onChange={(e)=>handle(e)} id='module' value={data.module}/>
                </div>

                <div className="flex">
                    <form className="cropsinput">
                        <label>Module title</label>
                        <input type="text" placeholder='type here' className='inputy' onChange={(e)=>handle(e)} id='title' value={data.title}/>
                    </form>

                    <form className="cropsinput">
                        <label>Module sub-title</label>
                        <input type="text" placeholder='type here...' className='inputy' onChange={(e)=>handle(e)} id='subTitle' value={data.subTitle}/>
                    </form>
                </div>

                <div className="lastbottom">
                    <div className='textarea'>
                        <h1>Module content</h1>
                        <textarea name="Module content" className='text' cols="30" rows="10" onChange={(e)=>handle(e)} id='content' value={data.content}></textarea>
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
                    <button className='save' onClick={submit}>Save</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cropscont