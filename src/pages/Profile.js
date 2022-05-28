import React from 'react';
import Sidebar from "../component/Sidebar";
import { useAuth } from '../contexts/AuthContext';

const Profile = () => {
    const { currentUser } = useAuth()

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
                        {currentUser.photoURL ? <img className="img-fluid rounded-circle" src={currentUser.photoURL} alt="img" /> : <p>No Profile Picture to display</p>}
                        </div>
                        <div>
                            <div className="d-flex justify-content-between">
                                <p>Full name</p>
                                <p>{currentUser.displayName ? currentUser.displayName: localStorage.getItem("name")}</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p>Email</p>
                                <p>{currentUser.email}</p>
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
