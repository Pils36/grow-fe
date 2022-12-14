import "./navbar.scss"
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from "react-router-dom";
import loggedIn from '../../constants/auth';




const Navbar = () => {
    return (
        <div className='navbar'> 
            <div className="wrapper">
                <div className="admin">
                    <div className="contNoti">
                        <Link to={'/notification'}><NotificationsActiveOutlinedIcon className="noti" /></Link>
                        <div className="counter"></div>
                    </div>
                    <h2 className="name">{loggedIn().fullname} <br /> ({loggedIn().accountType}) </h2>
                    <AccountCircleOutlinedIcon />
                </div> 

                

                <div className="items">
                    <div className="item">
                
                    </div>
                </div>
            </div>           
        </div>
    ) 
}
 
export default Navbar
