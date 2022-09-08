import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { Link } from 'react-router-dom'

const Vegetables = () => {
  return (
    <div className="crop">
      <Sidebar />
      <div className="cropContainer">
        <Navbar />
        <h1 className='text-gray-600 px-6'>Crops</h1>
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

        <div className="grid grid-flow-col grid-rows-1 gap-5 mr-4">
            <div className="w-52 h-60 rounded ml-8 overflow-hidden shadow-lg">
                <img className="w-full h-36" src="https://images.unsplash.com/photo-1530464684439-723262c0d16e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNyb3BzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                <div className="px-2 py-4">
                    <div className="font-bold text-xl font-light mb-1">Grains</div>
                </div>
                <div className="px-2 pb-2 flex justify-between">
                    <span className="text-sm font-semibold text-gray-700 mr-2 mb-2">Edit content</span>
                    <span className="text-sm font-semibold text-red-500 mr-2 mb-2">Delete</span>
                </div>
            </div>

            <div className="w-52 h-60 rounded ml-8 overflow-hidden shadow-lg">
                <img className="w-full h-36" src="https://images.unsplash.com/photo-1530464684439-723262c0d16e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNyb3BzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                <div className="px-2 py-4">
                    <div className="font-bold text-xl font-light mb-1">Grains</div>
                </div>
                <div className="px-2 pb-2 flex justify-between">
                    <span className="text-sm font-semibold text-gray-700 mr-2 mb-2">Edit content</span>
                    <span className="text-sm font-semibold text-red-500 mr-2 mb-2">Delete</span>
                </div>
            </div>

            <div className="w-52 h-60 rounded ml-8 overflow-hidden shadow-lg">
                <img className="w-full h-36" src="https://images.unsplash.com/photo-1530464684439-723262c0d16e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNyb3BzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                <div className="px-2 py-4">
                    <div className="font-bold text-xl font-light mb-1">Grains</div>
                </div>
                <div className="px-2 pb-2 flex justify-between">
                    <span className="text-sm font-semibold text-gray-700 mr-2 mb-2">Edit content</span>
                    <span className="text-sm font-semibold text-red-500 mr-2 mb-2">Delete</span>
                </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Vegetables