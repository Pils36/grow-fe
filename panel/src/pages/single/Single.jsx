import { useState, useEffect } from "react"
import "./single.scss"
import logo from "../../components/images/Ellipse.png"
import Navbar from "../../components/navbar/Navbar"
import UserButton from "../../components/userbutton/UserButton"
import { Link } from "react-router-dom"
import axios from "axios"
import DeleteModal from "../../components/DeleteModal"

const Single = () => { 
  const [deleteModal, setDeleteModal] = useState(false)
  const [data, setData] = useState ([])
  const [status, setStatus] = useState (false)
  const urlParams = new URLSearchParams(window.location.search)
  const userId = urlParams.get('id')


  const requestOptions = {
    method: "GET",
    url: "https://api-v1-staging.growng.company/api/v1/admin/user/" + userId,
    headers:{
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.token
    },
}
 
useEffect (() => {
  const fetchUsers = async () => {
    try{ 
  const res = await axios (requestOptions)

    setData(res.data.data)
      setStatus(true);
    }catch(err){
    console.log(err);
  }
}
    fetchUsers()
},[])

  return (
     <div className="single"> 
     <div className="singleBar"> 
        <div className="top">
          <Link to="/dashboard"><img className="logo" src={ logo } alt="Logo" /></Link>
        </div>
 
        <div className="center"> 
                <ul>
                    <Link to={`/users/personalinfo?id=`+userId}><li><span>Personal Information</span></li></Link>
                    <Link to={`/users/activity?id=`+userId}><li><span>Account Activity</span></li></Link>
                    <Link to={`/users/analytics?id=`+userId}><li><span>Analytics</span></li></Link>
                </ul>

                <UserButton onClick={() => {setDeleteModal(true)}} />
                
        </div> 
     </div>
      <div className="singleContainer">
        <Navbar />
        <div className="basicInfo">
          <h1>Personal Information</h1>
          <p>Contains all basic user info used on Grow app</p>
          <h3>Basic Info</h3>
        </div>

        <div className="infoDetail">
          <div className="right">
            <h1>Full Name</h1>
            <h1>Email Address</h1> 
            <h1>Phone Number</h1>
            <h1>Location</h1>
            <h1>Account status</h1>
            <h1>Date created</h1>
            <h1>Number of farms</h1>
            <h1>Crop</h1>
            <h1>Account Password</h1>
          </div>
          {
            status ? <div className="left" key={data._id}>

              <p>{ data.fullName }</p>
              <p>{ data.email }</p>
              <p>{ data.phoneNumber }</p>
              <p>{data.cityState }</p>
              <p className="status">{ data.status }</p>
              <p>{ data.created_at }</p>
              <p>1</p>
              <p>Maize</p>
              <p>ewfsgddhSE#</p>
            </div> : 'Loading...'
          }
           
  
        </div>
        {deleteModal && <DeleteModal closeModal={setDeleteModal} />}
      </div>
    </div> 
  )
} 

export default Single