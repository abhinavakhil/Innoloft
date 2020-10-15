import React from 'react';

import "../components/Main.css";
import Sidebar from "./Sidebar";
import User from "./User";

const Main = () => {
    return (
        <div className="Main">
            <div className="Sidebar">
            <Sidebar></Sidebar>
            </div>
            <div className="User">
             <User></User>
            </div>
        </div>
    )
}

export default Main
