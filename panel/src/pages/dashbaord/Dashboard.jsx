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
import Lines from "../../components/charts/Lines";

const Dashboard = () => {

    const [query, setQuery] = useState("")
    const search = (data) => {
        return data.filter(item => item.fullName.toLowerCase().includes(query))
    }

    const [data, setData] = useState();
    const [userData, setUserData] = useState();
    const [status, setStatus] = useState(false)
    const [statusData, setStatusData] = useState(false)

   

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                 const requestOptions = {
                     method: "GET",
                     url: `${baseurl()}/menu`,
                     headers: {
                         "Content-Type": "application/json",
                         "Authorization": "Bearer " + localStorage.token
                     }
                 }
                 
                const res = await axios(requestOptions)
                setData(res.data.data);
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
                setStatusData(true); 
                
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
                
                <div className="home_up">
                    <h1 className="dash">Dashboard</h1>
                    <Navbar />
                </div>

                {
                    status ? <>
                        <div className="homeDisplay">
                            <div key={data.user} className="homeDispalyDown">
                                <div className="one">
                                    <h1>Total Users</h1>
                                    <h2>{data.user}</h2>
                                    <div className="status">
                                        <p className="act">Active <span>:{data.activeuser}</span></p>
                                        <p className="in">Inactive <span>:{data.inactiveuser}</span></p>
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

                                <div className="three">
                                    <h1>Total no of calls made</h1>
                                    <h2 className="api">250</h2>
                                </div>
                            </div> 
                        </div>
                        <Lines data={
                            {
                                user: data.user,
                                active: data.activeuser,
                                inactive: data.inactiveuser
                            }
                        }
                        />
                    </>
                        : 'loading...'
                }

                
            </div>
        </div>
    )
}

export default Dashboard
