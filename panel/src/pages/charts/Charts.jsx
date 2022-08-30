import "./charts.scss"
import logo from "../../components/images/Ellipse.png"
import Navbar from "../../components/navbar/Navbar"
import UserButton from "../../components/userbutton/UserButton"
import { Link } from "react-router-dom"


const Charts = () => {
    const urlParams = new URLSearchParams(window.location.search)
    const userId = urlParams.get('id')
  return (
    <div className="chart">
    <div className="chartBa">
       <div className="top"> 
           <img className="logo" src={ logo } alt="Logo" />
       </div>

       <div className="center">  
               <ul>
                    <Link to={`/users/personalinfo?id=`+userId}><li><span>Personal Information</span></li></Link>
                    <Link to={`/users/activity?id=`+userId}><li><span>Account Activity</span></li></Link>
                    <Link to={`/users/analytics?id=`+userId}><li><span>Analytics</span></li></Link>
               </ul>

               <UserButton />
       </div> 
    </div>
        <div className="chartContain">
            <Navbar />
            <div className="basicCharts">
                <h3>Analytics</h3>
                <p>See users statistics in a snapshot</p>
                <h4>Analytics</h4>
            </div>

            <div className="charts">
                <div className="topDete">
                    <div className="topDet">
                        <h1>Number of Farms</h1>
                        <h2>1</h2>
                        <p>Created Mon 3rd June 2000</p>
                    </div>

                    <div className="topDet">
                        <h1>Total task</h1>
                        <h2>12</h2>
                    </div>
                    <div className="topDet">
                        <h1>Schedule tasks</h1>
                        <h2>4</h2>
                    </div>
                    <div className="topDet">
                        <h1>Schedule tasks</h1>
                        <h2>5</h2>
                    </div>
                </div>

                <div className="bottom">
                    <div className="chartLeft">
                        <h1>Schedule tasks</h1>
                        <h2>1</h2>
                    </div>

                    <div className="chartLeft">
                        <h1>Schedule tasks</h1>
                        <h2>1</h2>
                    </div>
                    <div className="chartRight">

                    </div>
                </div>
            </div>
        </div>
        </div>
  )
}

export default Charts