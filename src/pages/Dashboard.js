import React, { useState } from 'react';
import Sidebar from '../component/Sidebar';
import './Dashboard.css'


const Dashboard = () => {
    
    return (
        <>
        <div className="sideBar-usage">
            <Sidebar />
            <div className="my-auto mx-5 dashboard-Page">
                <div className="row p-3 align-items-center welcome">
                    <div className="col-md-6 p-3">
                        <h2>Welcome</h2>
                        <p>Oluwasanmi Awelewa</p>
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
