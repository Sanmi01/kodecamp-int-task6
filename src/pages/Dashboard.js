import React, { useState } from 'react';
import Sidebar from '../component/Sidebar';


const Dashboard = () => {
    
    return (
        <>
        <div className="sideBar-usage">
            <Sidebar />
            <div>
                <div className="row p-3 align-items-center">
                    <div className="col-md-6 p-3 text-center">
                        <p>Welcome</p>
                        <span>Me</span>
                    </div>
                    <div className="col-md-6 p-3 text-center">
                        <img class="img-fluid" src="https://i.postimg.cc/GtXnW3tq/undraw-welcome-cats-thqn-removebg-preview.png" alt="welcome" />
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Dashboard
