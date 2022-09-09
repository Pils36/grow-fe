import { useEffect, useState } from "react";
import "./crops.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { Link } from "react-router-dom"
import baseurl from "../../constants/baseurl"
import axios from 'axios'
const Crops = () => {  

    const [crops, setCrops] = useState();
    const [status, setStatus] = useState(false);

    useEffect(() => {
        getAllCrops();
    }, [crops])


    const getAllCrops = async () => {
        try {
            const requestOptions = {
                method: "GET",
                url: `${baseurl()}/crop`,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.token
                }
            }

            const result = await axios(requestOptions);

            setCrops(result.data.data);
            setStatus(true);

        } catch (error) {
            console.log(error);
        }
    }

    const deleteCrop = async (id) => {
        try {

            const requestOptions = {
                method: "DELETE",
                url: `${baseurl()}/crop/delete/${id}`,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.token
                }
            }

            await axios(requestOptions);

            alert('Successfully deleted');
        } catch (error) {
            console.log(error);
        }
    }


  return (   
    <div className="crop">
      <div className="cropSide"><Sidebar /></div>
      <div className="cropContainer">
        <Navbar />
        <h1 className="text-gray-600 px-6">Crops</h1>  
        <p className="text-gray-600 px-6">Contains all crops on your database</p>
        <div>
            <ul className="flex gap-3 ml-6 pt-5">
                <Link to="/crops"><li className="hover:border-b-2 cursor-pointer border-gray-600">All crops (7)</li></Link>
                <Link to="/grains"><li className="hover:border-b-2 cursor-pointer border-gray-600">Grains (1)</li></Link>
                <Link to="/tubers"><li className="hover:border-b-2 cursor-pointer border-gray-600">Tubers(3)</li></Link>
                <Link to="/vegetables"><li className="hover:border-b-2 cursor-pointer border-gray-600">Vegetables (3)</li></Link>
            </ul>
        </div>
        <Link to='addcrops'><button className="bg-transparent border-2 border-green-800 px-6 pt-1 pb-2 rounded-md text-green-800 font-bold text-sm ml-5 my-10">Add new crop</button></Link>

        <div className="grid grid-flow-col grid-rows-2 gap-5 mr-4">

            {
                status ?

                          (crops.length > 0 ?
                            crops.map((item, key) => {
                                return <div className="w-52 h-60 rounded ml-6 overflow-hidden shadow-lg" key={key}>
                                    <img className="w-full h-36" src={item.image !== "" ? item.image : "https://images.unsplash.com/photo-1530464684439-723262c0d16e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNyb3BzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"} alt="" />
                                    <div className="px-2 py-4">
                                        <div className="font-bold text-xl mb-1">{item.name}</div>
                                    </div>
                                    <div className="px-2 pb-2 flex justify-between">
                                        <Link to={`/crop/view/${item._id}`}><span className="text-sm font-semibold text-gray-700 mr-2 mb-2">Edit content</span></Link>
                                        <span className="text-sm font-semibold text-red-500 mr-2 mb-2 cursor-pointer" onClick={() => deleteCrop(item._id)}>Delete</span>
                                    </div>

                                    
                                </div>
                            })
                           : <p>No data available</p>)

                : <p>Loading..</p>
            }
            

        </div>

      </div>
    </div>
  )
}

export default Crops