import "./schedule.scss"
import logo from "../../components/images/Ellipse.png"
import Navbar from "../../components/navbar/Navbar"
import UserButton from "../../components/userbutton/UserButton"

const Schedule = () => {
  return (
    <div className="schedule">
    <div className="scheduleBa">
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
        <div className="scheduleContain">
            <Navbar />
            <div className="basicSchedule">
                <h3>Task schedule details</h3>
                <p>See Users schedule in snapshot</p>
                <h4>Tasks</h4>
                <div className="scheduleHeader">
                    <h1>Scheduled tasks</h1>
                    <h1>Tasks in-progress</h1>
                    <h1>Completed tasks</h1>
                </div>

                <div className="scheduleFert">
                    <div className="scheduleTop">
                        <div>
                            <h1>Fertilizer application</h1>
                            <p>Projected start date: Monday, 12 July 2000</p>
                            <p>Projected end date: Tuesday, 13 July 2000</p>
                        </div>
                    </div>

                    <div className="scheduleTop">
                        <div>
                            <h1>Fertilizer application</h1>
                            <p>Projected start date: Monday, 12 July 2000</p>
                            <p>Projected end date: Tuesday, 13 July 2000</p>
                        </div>
                    </div>

                    <div className="scheduleTop">
                        <div>
                            <h1>Fertilizer application</h1>
                            <p>Projected start date: Monday, 12 July 2000</p>
                            <p>Projected end date: Tuesday, 13 July 2000</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </div>
  )
}

export default Schedule