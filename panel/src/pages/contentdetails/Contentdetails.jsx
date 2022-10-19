import React from 'react'
import Modules from '../../components/modules/Modules'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

const Contentdetails = () => {

//     let tabs = document.querySelectorAll('.tab')
// let indicator = document.querySelector('.indicator')
// let panels = document.querySelectorAll('.tab-panel')

// indicator.style.width = tabs[0].getBoundingClientRect().width + 'px'
// indicator.style.left = tabs[0].getBoundingClientRect().left - tabs[0].parentElement.getBoundingClientRect().left + 'px'


// tabs.forEach(tab => {
//   tab.addEventListener('click', () => {
//     let tabTarget = tab.getAttribute('aria-controls')

//     indicator.style.width = tab.getBoundingClientRect().width + 'px'
//     indicator.style.left = tab.getBoundingClientRect().left - tab.parentElement.getBoundingClientRect().left + 'px'


//     panels.forEach(panel => {
//         let panelId = panel.getAttribute('id')
//         if(tabTarget === panelId){
//             panel.classList.remove('invisible', 'opacity-0')
//             panel.classList.add('visible', 'opacity-100')
//         } else {
//             panel.classList.add('invisible', 'opacity-0')
//         }
//     })
//   })
// })


  return (
    <div className="knowledge">
      <div className="knowledgeSide"><Sidebar /></div>
        <div className="knowledgeContainer">
            <div className='flex justify-between ml-6'>
                <h1 className='text-[28px] font-semibold text-[#404040]'>Knowledge Hub</h1>
                <Navbar />
            </div>
                <div className='ml-6 mb-16'>
                    <h1 className='text-[22px] font-medium text-[#404040]'>Maize</h1>
                    <p className='text-[14px] font-semibold text-[#808080]'>Contains the list of modules</p>
                </div>
            <div className="flex">
                <div className="w-52 h-60 rounded ml-6 overflow-hidden shadow-lg">
                    <img className="w-full h-36" src="https://images.unsplash.com/photo-1530464684439-723262c0d16e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNyb3BzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                        <div className="px-2 py-4">
                            <div className="text-[16px] font-medium text-[#000000]">Maize</div>
                        </div>
                </div>  
            </div>

           <Modules />
        </div>
    </div>
  )
}

export default Contentdetails