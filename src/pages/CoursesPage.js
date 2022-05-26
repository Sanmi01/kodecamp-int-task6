import React from 'react';
import Sidebar from '../component/Sidebar';
import courseData from '../courseData';
import Course from '../component/Course';
import { GiMaterialsScience, GiMoonOrbit, CgMathDivide, MdOutlineScience, RiEnglishInput } from 'react-icons/fa';


const CoursesPage = () => {
    
    return (
        <>
            <div className="sideBar-usage">
            <Sidebar />
            <div>
                <div className="d-flex justify-content-around flex-wrap">
                    {courseData.map((course, index) => (
                        <Course name={course.name} icon={course.icon} key={index} />
                    ))}
                </div>
            </div>
            </div>
        </>
    )
}

export default CoursesPage
