import React from 'react';
import Sidebar from "../component/Sidebar";

const Profile = () => {
    return (
        <>
            <div className="sideBar-usage">
                <Sidebar />
                <div>
                    <div>
                    <h2>Profile Setting</h2>
                    <p>Personal Details</p>
                    <div>
                        <img className="img-fluid" src="https://i.postimg.cc/667zCLZ8/pexels-anastasiya-gepp-1462630-removebg-preview.png" alt="img" />
                        <div>
                            <div>
                                <p>Full name</p>
                                <p>Oluwasanmi Awelewa</p>
                            </div>
                            <div>
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
