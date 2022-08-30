import { useState, useEffect } from 'react'
import "./activity.scss"
import logo from "../../components/images/Ellipse.png"
import Navbar from "../../components/navbar/Navbar"
import UserButton from "../../components/userbutton/UserButton"
import { Link } from "react-router-dom"
import axios from "axios"
 
const Activity = () => { 
    const [data, setData] = useState ()
    const [status, setStatus] = useState (false)
    const urlParams = new URLSearchParams(window.location.search)
    const userId = urlParams.get('id')

    

    const requestOptions = {
        method: "GET",
        url: "https://api-v1-staging.growng.company/api/v1/admin/user/activity/" + userId,
        headers:{
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.token
        },
    }

     
    useEffect (() => {
      const fetchUsers = async () => {
        try{ 
      const res = await axios (requestOptions)
      console.log(res)
    
        setData(res.data.data)
          setStatus(true);
        }catch(err){
        console.log(err);
      }
    }
        fetchUsers()
    },[])
  return (
    <div className="activity">
    <div className="activeBa">
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
        <div className="activeContain">
            <Navbar />
            <div className="basicactivity">
                <h3>Account activity</h3>
                <p>Contains all user activities on Grow app</p>
                <h4>Activities</h4>
            </div>
            {/* {JSON.parse(JSON.stringify(data.history))} */}
         {/* {data.history.map((histories, key) => (
            <div key={key} className="activityInfo">
                <div className="activityInfoF">
                    <div className="left">
                        <h2>{histories.userId}</h2>
                        <p>{histories.information}</p>
                    </div>
                    <div className="right">
                        <h3>{histories.created_at}</h3>
                        <p>{histories.updated_at}</p>
                    </div>
                </div>
            </div>
        ))}  */}
        </div>
   </div>
  )
}

export default Activity