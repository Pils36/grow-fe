import { useState, useEffect } from "react";
import "./dashboard.scss"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import { Users } from '../../Users'
import Table from "../../components/table/Table"
import { Link } from "react-router-dom";
import axios from "axios";
import baseurl from '../../constants/baseurl';

const Dashboard = () => {

    const [query, setQuery] = useState("")
    const search = (data) => {
        return data.filter(item => item.fullName.toLowerCase().includes(query))
    }

    const [data, setData] = useState();
    const [userData, setUserData] = useState();
    const [status, setStatus] = useState(false)

    const requestOptions = {
        method: "GET",
        url: `${baseurl()}/menu`,
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.token
        }
    }

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios(requestOptions)
                setData(res.data.data)
                setStatus(true);
            } catch (err) {
                console.log(err);
            }
        }
        fetchUsers()
    }, [])


    useEffect(() => {
        const fetchAllUsers = async () => {
            try {

                const config = {
                    method: 'GET',
                    url: `${baseurl()}/user`,
                    headers: { "Authorization": "Bearer " + localStorage.token }
                }

                const result = await axios(config);

                setUserData(result.data.data);
                setStatus(true);
                
            } catch (err) {
                console.log(err);
            }
        }
        fetchAllUsers()
    }, [])

    return (
        <div className='home'>
            <div className='homeSide'>
                <Sidebar />
            </div>


            <div className="homeCOntainer">
                <div className="homeUp">
                    <Link to="/"><h1>Logout</h1></Link>
                    <Navbar />
                    <div className="search">
                        <input type="text" placeholder="Search by name" onChange={e => setQuery(e.target.value)} />
                        <PersonSearchOutlinedIcon className="searchN" />
                    </div>
                </div>

                <div className="homeDisplay">
                    <h1>Dashboard</h1>
                    {status ?
                        <div key={data.user} className="homeDispalyDown">
                            <div className="one">
                                <h1>Total Users</h1>
                                <h2>{data.user}</h2>
                                <div className="status">
                                    <p className="act">Active <span>:135</span></p>
                                    <p className="in">Inactive <span>:15</span></p>
                                </div>
                            </div>
                            <div className="one">
                                <h1>Total farms</h1>
                                <h2>{data.farm}</h2>
                                <div className="status">
                                    <p className="act">Active <span>:215</span></p>
                                    <p className="in">Inactive <span>:10</span></p>
                                </div>
                            </div>
                            <div className="three">
                                <h1>Total crops</h1>
                                <h2>{data.crops}</h2>
                                <div className="status">
                                    <p>Tubers <span>:3</span></p>
                                    <p>Vegetable <span>:1</span></p>
                                </div>
                            </div>
                        </div> : 'loading...'
                    }
                </div>
                {status ?
                <>
                        <div className="homeTableHead">
                            <h1>User list</h1>
                            <p>You have a total of {userData.length} users</p> : <p>Loading...</p>

                        </div>

                        <Table data={search(userData)} />
                </>
                : <p>Loading...</p>
                }
            </div>
        </div>
    )
}

export default Dashboard
