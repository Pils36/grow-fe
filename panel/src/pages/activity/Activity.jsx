import "./activity.scss"
import logo from "../../components/images/Ellipse.png"
import Navbar from "../../components/navbar/Navbar"
import UserButton from "../../components/userbutton/UserButton"
import { Link } from "react-router-dom" 

const Activity = () => {
  return (
    <div className="activity">
    <div className="activeBa">
       <div className="top">
           <img className="logo" src={ logo } alt="Logo" />
       </div>

       <div className="center"> 
               <ul>
                   <Link to='/users/personalinfo'><li><span>Personal Information</span></li></Link>
                   <Link to="/users/activity"><li><span>Account Activity</span></li></Link>
                   <Link to="/users/analytics"><li><span>Analytics</span></li></Link>
               </ul> 

               <UserButton />
       </div> 
    </div>
        <div className="activeContain">
            <Navbar />
            <div className="basicactivity">
                <h3>Account activity</h3>
                <p>Contains all user activities on Grow app</p>
                <h4>Activities</h4>
            </div>

            <div className="activityInfo">
                <div className="activityInfoF">
                    <div className="left">
                        <h2>Clement added a new task schedule</h2>
                        <p>"Clearing of land" for farm B on 6th July, 2000</p>
                    </div>
                    <div className="right">
                        <h3>3rd June, 2000</h3>
                        <p>12:33pm</p>
                    </div>
                </div>

                <div className="activityInfoF">
                    <div className="left">
                        <h2>Clement added a new task schedule</h2>
                        <p>"Clearing of land" for farm B on 6th July, 2000</p>
                    </div>
                    <div className="right">
                        <h3>3rd June, 2000</h3>
                        <p>12:33pm</p>
                    </div>
                </div>

                <div className="activityInfoF">
                    <div className="left">
                        <h2>Clement added a new task schedule</h2>
                        <p>"Clearing of land" for farm B on 6th July, 2000</p>
                    </div>
                    <div className="right">
                        <h3>3rd June, 2000</h3>
                        <p>12:33pm</p>
                    </div>
                </div>

                <div className="activityInfoF">
                    <div className="left">
                        <h2>Clement added a new task schedule</h2>
                        <p>"Clearing of land" for farm B on 6th July, 2000</p>
                    </div>
                    <div className="right">
                        <h3>3rd June, 2000</h3>
                        <p>12:33pm</p>
                    </div>
                </div>

                <div className="activityInfoF">
                    <div className="left">
                        <h2>Clement added a new task schedule</h2>
                        <p>"Clearing of land" for farm B on 6th July, 2000</p>
                    </div>
                    <div className="right">
                        <h3>3rd June, 2000</h3>
                        <p>12:33pm</p>
                    </div>
                </div>

                <div className="activityInfoF">
                    <div className="left">
                        <h2>Clement added a new task schedule</h2>
                        <p>"Clearing of land" for farm B on 6th July, 2000</p>
                    </div>
                    <div className="right">
                        <h3>3rd June, 2000</h3>
                        <p>12:33pm</p>
                    </div>
                </div>
            </div>
        </div>
   </div>
  )
}

export default Activity