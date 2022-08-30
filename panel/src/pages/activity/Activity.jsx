import { useState, useEffect } from 'react'
import "./activity.scss"
import logo from "../../components/images/Ellipse.png"
import Navbar from "../../components/navbar/Navbar"
import UserButton from "../../components/userbutton/UserButton"
import { Link } from "react-router-dom"
import axios from "axios"
 
const Activity = () => { 
    const [myData, setMyData] = useState ()
    const [status, setStatus] = useState (false)
    const urlParams = new URLSearchParams(window.location.search)
    const userId = urlParams.get('id')

    



     
    useEffect (() => {
      const fetchUsers = async () => {
        try{ 
          const requestOptions = {
            method: "GET",
            url: "https://api-v1-staging.growng.company/api/v1/admin/user/activity/" + userId,
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer " + localStorage.token
            }
          }
      const res = await axios (requestOptions)
          setMyData(res.data.data);

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

        { 
          status ? 
            myData.history.map((histories, key) => (
              <div key={key} className="activityInfo">
                <div className="activityInfoF">
                  <div className="left">
                    <h2>{histories.userId}</h2>
                  </div>
                  <div>
                    <p>{histories.information}</p>
                  </div>
                  <div className="right">
                    <h3>{new Date(histories.created_at).toDateString()}</h3>
                    <p>{new Date(histories.updated_at).toDateString()}</p>
                  </div>
                </div>
              </div>
            ))
           : <p>Loading..</p>
        }

        
        </div>
   </div>
  )
}

export default Activity