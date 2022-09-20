import "./profile.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import { MdDelete } from 'react-icons/md';
import { HiOutlineUserCircle } from 'react-icons/hi'
import auth from '../../constants/auth'
import { Link } from "react-router-dom";

const Profile = () => {
  return ( 
    <div className="profile"> 
      <Sidebar />
      <div className="profileContainer">  
        <div className="profileTop">
            <h1>Super Admin Profile</h1> 
            <div className="profileNote">
                <NotificationsActiveOutlinedIcon className="noti" />
                <h2>Logout</h2>
            </div>
        </div>
 
        <div className="profileDown"> 
            
        </div> 
 
        <div className="profileDownCont">
            <div className="profileLeftUp">
                <div className="profileLeft">
                    {/* <div className="profileIcon">
                        <AccountCircleOutlinedIcon />
                        <h2>Admin name</h2>
                    </div> */}
                    <div className="profileUseHead">
                        <h1>First name</h1>
                        <h1>Last name</h1>
                        <h1>Email address</h1>
                        <h1>Phone number</h1>
                        <h1>Role</h1>
                    </div>

                    <div className="profileContent">
                        <h1>Clement</h1>
                        <h1>Olawuyi</h1>
                        <h1>namesurname@gmail.com</h1>
                        <h1>+23480567888856</h1>
                        <h1>Product manager</h1>
                    </div>
                </div>
            </div>

            <div className="others">
                <h6>Other Admins</h6>
                    <div className="othersdone">
                        <div className="singleothers border-b border-black/50">
                            <div className="single-left">
                                <HiOutlineUserCircle className="h-10 w-10 ml-2 mr-3 mt-3"/>
                                <div className="py-2">
                                    <h2>Admin 1</h2>
                                    <p>admin1@mail.com</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-center">
                                <h1 className="text-[24px] text-[#074028]">Edit</h1>
                                <MdDelete className="mt-1 h-7 w-7"/>
                            </div>
                        </div>


                        <div className="singleothers border-b border-black/50">
                            <div className="single-left">
                                <HiOutlineUserCircle className="h-10 w-10 ml-2 mr-3 mt-3"/>
                                <div className="py-2">
                                    <h2>Admin 1</h2>
                                    <p>admin1@mail.com</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-center">
                                <h1 className="text-[24px] text-[#074028]">Edit</h1>
                                <MdDelete className="mt-1 h-7 w-7"/>
                            </div>
                        </div>

                        <div className="singleothers border-b border-black/50">
                            <div className="single-left">
                                <HiOutlineUserCircle className="h-10 w-10 ml-2 mr-3 mt-3"/>
                                <div className="py-2">
                                    <h2>Admin 1</h2>
                                    <p>admin1@mail.com</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-center">
                                <h1 className="text-[24px] text-[#074028]">Edit</h1>
                                <MdDelete className="mt-1 h-7 w-7"/>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        <div className="userbtn">
            <button className="edit"><Link to='/adminedit'>Edit profile</Link></button>
            <button className="newad"><Link to='/newadmin'>Add new Admin</Link></button>
        </div>

        <div className="profileFoot"> 
            
        </div>

        <div className="profileUnder">
            <div className="profileUnderUp">
                <h1>Roles and Permissions</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page <br /> when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal <br /> distribution of letters,</p>
            </div>
            <div className="viewbtn">
                <button className="view"><Link to='/permission'>View all</Link></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Profile