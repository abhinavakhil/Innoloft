import React from 'react'
import "../components/Sidebar.css";

const sidebar = ()=>{
    return (
        <div>
            <h1>Sidebar</h1>
            <a href="#" className="item"><i class="fas fa-home"></i> Home</a>
            <a href="#" className="item"><i className="fas fa-globe-africa"></i> My Account</a>
            <a href="#" className="item"><i className="fas fa-globe-africa"></i> My Company</a>
            <a href="#" className="item"><i className="fas fa-globe-africa"></i> My Settings</a>
            <a href="#" className="item"><i className="fas fa-globe-africa"></i> News</a>
            <a href="#" className="item"><i className="fas fa-globe-africa"></i> Analytics</a>

            
            
        </div>
    )
}

export default sidebar
