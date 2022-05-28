import React from 'react';
import Sidebar from '../component/Sidebar';
import courseData from '../courseData';
import Course from '../component/Course';
import { useNavigate } from "react-router-dom";


const CoursesPage = () => {
    const navigate = useNavigate();
    function reDirect(id) {
        navigate(`/dashboard/course/${id}`)
    }
    return (
        <>
            <div className="sideBar-usage">
            <Sidebar />
            <div className="text-center my-auto mx-5">
                <h2 className="text-white">Our Courses</h2>
                <div className="d-flex justify-content-around flex-wrap">
                    {courseData.map((course, index) => (
                        <Course onClick={() => reDirect(course.id)} name={course.name} icon={course.icon} key={index} />
                    ))}
                </div>
            </div>
            </div>
        </>
    )
}

export default CoursesPage
