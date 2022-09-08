import React, {useEffect, useState} from "react"
import "./knowledge.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { Link } from "react-router-dom"
import baseurl from '../../constants/baseurl';
import axios from "axios";

const Knowledge = () => {

    const [knowledgeData, setKnowledgeData] = useState();
    const [status, setStatus] = useState (false);

    useEffect(() => {
        const getKnowledgeData = async () => {
            try {
                const requestOptions = {
                    method: "GET",
                    url: `${baseurl()}/knowledge`,
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + localStorage.token
                    }
                }

                const result = await axios(requestOptions);


                setKnowledgeData(result.data.data);
                setStatus(true);


            } catch (error) {
                
            }
        }

        getKnowledgeData();
    }, []);


    const deleteCrop = async (id) => {
        alert(id);
    }


    return (
    <div className="knowledge">
      <div className="knowledgeSide"><Sidebar /></div>
      <div className="knowledgeContainer">
        <Navbar />
        <h1>Knowledge Hub</h1>
        <Link to='create'><button className="bg-transparent border-2 border-green-800 px-6 py-2 rounded-md text-green-800 font-bold text-sm ml-5 my-10">Add new crop</button></Link>

        <div className="flex gap-3">

            {
                status ?

                            (knowledgeData.length > 0 ?
                                knowledgeData.map((item, key) => {
                                    return <div className="w-52 h-60 rounded ml-6 overflow-hidden shadow-lg" key={key}>
                                        <img className="w-full h-36" src={item.cropFile !== "" ? item.cropFile : "https://images.unsplash.com/photo-1530464684439-723262c0d16e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNyb3BzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"} alt="" />
                                        <div className="px-2 py-4">
                                            <div className="font-bold text-xl mb-1">{item.crop}</div>
                                        </div>
                                        <div className="px-2 pb-2 flex justify-between">
                                            <Link to={`knowledge/view/${item._id}`}><span className="text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">Edit content</span></Link>
                                            <span className="text-sm font-semibold text-red-500 mr-2 mb-2 cursor-pointer" onClick={() => deleteCrop(item._id)}>Delete</span>
                                        </div>
                                    </div>
                                })
                             : <p>No data available yet</p>)  

                
                 : <p>Loading..</p>
            }

           

           
        </div>

      </div>
    </div>

    )
}

export default Knowledge
