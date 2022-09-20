import React, { useState } from 'react'
import './modules.css'

const Modules = () => {

    const [toggleState, setToggleState ] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }

    
    
  return (
    <div className='modules'>
            <div className='bloc-tabs'>
                <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>Module 1</button>
                <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>Module 2</button>
                <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>Module 3</button>
            </div>

            <div className='content-tabs'>
                <div className={toggleState === 1 ? "conten active-content" : "content"}>
                    <h2 className='text-2xl font-bold mb-5'>Module 1</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, beatae aut! Corrupti unde at sint impedit praesentium? Alias, nemo voluptates.</p>
                </div>

                <div className={toggleState === 2 ? "conten active-content" : "content"}>
                    <h2 className='text-2xl font-bold mb-5'>Module 2</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit placeat optio ipsam excepturi voluptas eos, reiciendis ea minus tenetur consectetur praesentium vero. Nisi laborum quos quia quam temporibus facere modi soluta dignissimos numquam! Veniam, fuga aut dolor non reprehenderit adipisci?</p>
                </div>

                <div className={toggleState === 3 ? "conten active-content" : "content"}>
                    <h2 className='text-2xl font-bold mb-5'>Module 3</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit placeat optio ipsam excepturi voluptas eos, reiciendis ea minus tenetur consectetur praesentium vero. Nisi laborum quos quia quam temporibus facere modi soluta dignissimos numquam! Veniam, fuga aut dolor non reprehenderit adipisci?</p>
                </div>
            </div>
    </div>
  )
}

export default Modules