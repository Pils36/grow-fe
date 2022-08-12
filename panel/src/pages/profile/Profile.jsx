import "./profile.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Profile = () => {
  return ( 
    <div className="profile"> 
      <Sidebar />
      <div className="profileContainer"> 
        <div className="profileTop">
            <h1>Admin Profile</h1> 
            <div className="profileNote">
                <NotificationsActiveOutlinedIcon className="noti" />
                <h2>Logout</h2>
            </div>
        </div>
 
        <div className="profileDown">
            
        </div> 
 
        <div className="profileDownCont">
            <div className="profileLeft">
                <div className="profileIcon">
                    <AccountCircleOutlinedIcon />
                    <h2>Admin name</h2>
                </div>
                <div className="profileUseHead">
                    <h1>Username</h1>
                    <h1>Email Address</h1>
                    <h1>Password</h1>
                </div>
            </div>

            <div className="profileRight">
                <div className="profileUseTail">
                    <h1>Clement Olawuyi</h1>
                    <h1>namesurname@gmail.com</h1>
                    <h1>************</h1>
                </div>
                <div className="userbtn">
                    <h1>Add new Admin</h1>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Profile