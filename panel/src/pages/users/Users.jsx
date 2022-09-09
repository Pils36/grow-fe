import { useState, useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import "./users.scss"
import Table from "../../components/table/Table"
import axios from 'axios';
import baseurl from '../../constants/baseurl';

const Userss = () => {

    const [query, setQuery] = useState("")
     const keys =["fullName", "email"]


    const [data, setData] = useState([])
 
    const search = (data)=>{
        return data.filter((item) =>
            keys.some(key=>item[key].toLowerCase().includes(query))
        )
    }

    const requestOptions = {
        method: "GET",
        url: `${baseurl()}/user`,
        headers:{
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.token
        }
    }

    useEffect (() => {
        const fetchUsers = async () => {
            const res = await axios (requestOptions)
            setData(res.data.data)
        }
        fetchUsers()
    },[search])

  return (
    <div className='users'>
        <div className="usersSide"> 
            <Sidebar />
        </div>

        <div className="usersCOntainer">
            <div className="usersUp">
                <div className='usersHead'>
                    <h1>User list</h1>
                    <p>You have a total of 150 users</p>
                </div>
                <Navbar />
                <div className="search">
                    <input type="text" placeholder="Search by name" onChange={e=> setQuery(e.target.value)}/>
                    <PersonSearchOutlinedIcon className="searchN" />
                </div>
            </div>

            <Table data={data}/>
        </div>
    </div>
  )
}

export default Userss