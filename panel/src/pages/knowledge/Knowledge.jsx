import "./knowledge.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { Link } from "react-router-dom"

const Knowledge = () => {
    return (
    <div className="knowledge">
      <div className="knowledgeSide"><Sidebar /></div>
      <div className="knowledgeContainer">
        <Navbar />
        <h1>Knowledge Hub</h1>
        <Link to='create'><button className="bg-transparent border-2 border-green-800 px-6 py-2 rounded-md text-green-800 font-bold text-sm ml-5 my-10">Add new crop</button></Link>

        <div className="flex gap-3">
            <div class="w-52 h-60 rounded ml-6 overflow-hidden shadow-lg">
                <img className="w-full h-36" src="https://images.unsplash.com/photo-1530464684439-723262c0d16e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNyb3BzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                <div class="px-2 py-4">
                    <div class="font-bold text-xl mb-1">Grains</div>
                </div>
                <div class="px-2 pb-2 flex justify-between">
                    <span class="text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">Edit content</span>
                    <span class="text-sm font-semibold text-red-500 mr-2 mb-2 cursor-pointer">Delete</span>
                </div>
            </div>

            <div class="w-52 h-60 rounded ml-8 overflow-hidden shadow-lg">
                <img className="w-full h-36" src="https://images.unsplash.com/photo-1530464684439-723262c0d16e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNyb3BzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                <div class="px-2 py-4">
                    <div class="font-bold text-xl mb-1">Grains</div>
                </div>
                <div class="px-2 pb-2 flex justify-between">
                    <span class="text-sm font-semibold text-gray-700 mr-2 mb-2">Edit content</span>
                    <span class="text-sm font-semibold text-red-500 mr-2 mb-2">Delete</span>
                </div>
            </div>
        </div>

      </div>
    </div>

    )
}

export default Knowledge
