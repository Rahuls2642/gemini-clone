import React, { useState } from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets'
const Sidebar = () => {
    const[extended,setExtended]=useState(false)
  return (
    <div className='sidebar'>
        <div className="top">
            <div>
            <img onClick={()=>{
                setExtended((prev)=>!prev)
            }} src={assets.menu_icon} alt="" />
            </div>
            <div className="new-chat">
                <img src={assets.plus_icon} alt="" />
                {extended?<p>New Chat</p>:null}
            </div>
            {extended?<div className="recent">
                <p className="recent-title">Recent</p>
                <div className="recent-entry">
                    <img src={assets.message_icon} alt="" />
                    <p>What is react ....</p>
                </div>
            </div>:null}
            
        </div>
        <div className="bottom">
            <div className="bottom-icon">
                <img src={assets.question_icon} alt="" />
                {extended?<p>help</p>:null}
            </div>
            <div className="bottom-icon">
                <img src={assets.history_icon} alt="" />
                {extended?<p>History</p>:null}
            </div>
            <div className="bottom-icon">
                <img src={assets.setting_icon} alt="" />
                {extended?<p>Settings</p>:null}
            </div>
        </div>
    </div>
        

  )
}

export default Sidebar