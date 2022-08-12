import "./farm.scss"
import logo from "../../components/images/Ellipse.png"
import Navbar from "../../components/navbar/Navbar"
import UserButton from "../../components/userbutton/UserButton"

const Farm = () => {
  return (
    <div className="single">
     <div className="singleBar"> 
        <div className="top">
            <img className="logo" src={ logo } alt="Logo" />
        </div>
 
        <div className="center"> 
                <ul>
                    <li><span>Personal Information</span></li>
                    <li><span>Account Activity</span></li>
                    <li><span>Analytics</span></li>
                </ul>

                <UserButton />
        </div>
     </div>
      <div className="singleContainer">
        <Navbar />
        <div className="basicInfo">
          <h1>Farm details</h1>
          <p>See users' farm in a snapshot</p>
          <h3>Farm</h3>
        </div>

        <div className="farmName">
            <div className="left">
                <h1>Farm name</h1>
                <h1>Location</h1>
                <h1>Date created</h1>
                <h1>Crop type</h1>
            </div>

            <div className="right">
                <h1>Clement farms</h1>
                <h1>Uruan, Akwa Ibom</h1>
                <h1>Saturday, 18th June, 2000</h1>
                <h1>Maize</h1>
            </div>
        </div>
        </div>
        </div>
  )
}

export default Farm