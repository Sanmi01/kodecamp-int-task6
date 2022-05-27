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
            height: '10rem'
          }}>
                        <img className="img-fluid rounded-circle" src={localStorage.getItem("profilePic")} alt="img" />
                        </div>
                        <div>
                            <div className="d-flex justify-content-between">
                                <p>Full name</p>
                                <p>{localStorage.getItem("name")}</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p>Email</p>
                                <p>{localStorage.getItem("email")}</p>
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
