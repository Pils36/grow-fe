import React from 'react'
import Donut from '../../components/charts/Donut'
import Lines from '../../components/charts/Lines'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./apicalls.scss"

const Apicalls = () => {
  return (
    <div className='home'>
            <div className='homeSide'>
                <Sidebar />
            </div>


            <div className="homeCOntainer">
                {/* <div className="homeUp">
                    <Link to="/"><h1>Logout</h1></Link>
                    <Navbar />
                    <div className="search">
                        <input type="text" placeholder="Search by name" onChange={e => setQuery(e.target.value)} />
                        <PersonSearchOutlinedIcon className="searchN" />
                    </div>
                </div> */}
                <div className="home_up">
                    <h1 className="dash">API Call Tracker</h1>
                    <Navbar />
                </div>

                <div className="homeDisplayApi">
                    {/* <h1>Dashboard</h1> */}
                        <div className="homeDispalyDownApi"> 
                            <div className="one">
                                <h1>Calls</h1>
                                <h2>500</h2>
                            </div>
                            <div className="one">
                                <h1>No of calls made</h1>
                                <h3>250</h3>
                            </div>
                            <div className="three">
                                <h1>Available no of calls</h1>
                                <h4>250</h4>
                            </div>
                        </div> 
                </div>
                {/* {statusData ?
                <>
                        <div className="homeTableHead">
                            <h1>User list</h1>
                            <p>You have a total of {userData.length} users</p>
                        </div>

                        <Table data={search(userData)} />
                </>
                : <p>Loading...</p>
                } */}

                <Donut />
            </div>
        </div>
  )
}

export default Apicalls