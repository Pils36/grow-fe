import React, { useState, useEffect } from 'react'
import Donut from '../../components/charts/Donut'
import Lines from '../../components/charts/Lines'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./apicalls.scss"
import axios from "axios";

const Apicalls = () => {
    const [data, setData] = useState();
    const [status, setStatus] = useState(false)
    const baseurl = process.env.NODE_ENV !== 'production' ? 'http://localhost:5400/api/v1' : 'https://api-v1-staging.growng.company/api/v1';

    const calls = 500;
    useEffect(() => {
        const fetchApiCalls = async () => {
            try {
                const requestOptions = {
                    method: "GET",
                    url: `${baseurl}/weather/api-calls`,
                    headers: {
                        "Content-Type": "application/json",
                    }
                }
                const res = await axios(requestOptions)
                setData(res.data.data[0]);
                setStatus(true);
            } catch (err) {
                console.log(err);
            }
        }
        fetchApiCalls()
    }, [])

  return (
    <div className='home'>
            <div className='homeSide'>
                <Sidebar />
            </div>

            <div className="homeCOntainer">
                <div className="home_up">
                    <h1 className="dash">API Call Tracker</h1>
                    <Navbar />
                </div>

                {
                    status ? <>
                      <div className="homeDisplayApi">
                          <div className="homeDispalyDownApi">
                              <div className="one">
                                  <h1>Calls</h1>
                                  <h2>{calls}</h2>
                              </div>
                              <div className="one">
                                  <h1>No of calls made</h1>
                                  <h3>{data.total}</h3>
                              </div>
                              <div className="three">
                                  <h1>Available no of calls</h1>
                                  <h4>{calls - data.total}</h4>
                              </div>
                          </div>
                      </div>
                      <Donut data={data} />
                    </>

                    : <p>Loading..</p>
                }
            </div>
        </div>
  )
}

export default Apicalls