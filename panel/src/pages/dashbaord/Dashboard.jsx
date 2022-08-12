import { useState } from "react";
import "./dashboard.scss"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import { Users } from '../../Users'
import Table from "../../components/table/Table"
import { Link } from "react-router-dom";


const Dashboard = () => {

    const [query, setQuery] = useState("")
    const search = (data)=>{
        return data.filter(item=>item.fullName.toLowerCase().includes(query))
    }

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
                    <input type="text" placeholder="Search by name" onChange={e=> setQuery(e.target.value)}/>
                    <PersonSearchOutlinedIcon className="searchN" />
                </div>
            </div>

            <div className="homeDisplay">
                <h1>Dashboard</h1>
                <div className="homeDispalyDown"> 
                    <div className="one">
                        <h1>Total Users</h1>
                        <h2>150</h2>
                        <div className="status">
                            <p className="act">Active <span>:135</span></p>
                            <p className="in">Inactive <span>:15</span></p>
                        </div>
                    </div>
                    <div className="one">
                            <h1>Total farms</h1>
                            <h2>255</h2>
                            <div className="status">
                                <p className="act">Active <span>:215</span></p>
                                <p className="in">Inactive <span>:10</span></p>
                            </div>
                    </div>
                    <div className="three">
                        <h1>Total crops</h1>
                        <h2>7</h2>
                        <div className="status">
                            <p>Tubers <span>:3</span></p>
                            <p>Vegetable <span>:1</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="homeTableHead">
                <h1>User list</h1>
                <p>You have a total of 150 users</p>
            </div>
            <Table data={search(Users)}/>
          </div>  
        </div>
    )
}

export default Dashboard
