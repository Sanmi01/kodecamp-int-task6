import React from 'react';
import Sidebar from "../component/Sidebar";

const Profile = () => {
    return (
        <>
            <div className="sideBar-usage">
                <Sidebar />
                <div className="text-white m-5">
                    <div>
                    <h2>Profile Setting</h2>
                    <p>Personal Details</p>
                    <div className="text-center">
                        <div style={{
            width: '30rem',
            height: '30rem'
          }}>
                        <img className="img-fluid rounded-circle" src="https://i.postimg.cc/667zCLZ8/pexels-anastasiya-gepp-1462630-removebg-preview.png" alt="img" />
                        </div>
                        <div>
                            <div className="d-flex justify-content-between">
                                <p>Full name</p>
                                <p>Oluwasanmi Awelewa</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p>Email</p>
                                <p>Supersanmi01@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
