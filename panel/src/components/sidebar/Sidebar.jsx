import "./sidebar.scss"
import logo from "../images/Ellipse.png"
import { Link } from "react-router-dom"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/dashboard"><img className="logo" src={ logo } alt="Logo" /></Link>
            </div> 
            <div className="center"> 
                <ul>
                    <Link to="/dashboard"><li><span>Dashboard</span></li></Link>
                    <Link to="/knowledge"><li><span>Knowledge Hub</span></li></Link>
                    <Link to="/crops"><li><span>Crops</span></li></Link>
                    <Link to="/users"><li><span>Users List</span></li></Link>
                    <Link to="/apicalls"><li><span>API Calls</span></li></Link>
                    <Link to="/profile"><li><span>Admin Profile</span></li></Link>
                </ul> 
            </div> 

          
        </div>
    )
}

export default Sidebar
