import React from "react";
import { Button } from 'react-bootstrap';
import Sidebar from "../component/Sidebar";
import courseData from '../courseData';
import { Link, useParams } from "react-router-dom";

const SingleCourse = () => {
  const { id } = useParams();
  return (
    <>
      <div className="sideBar-usage">
        <Sidebar />
        <div className="m-5">
          <Link to="/coursePages"><Button>Go Back</Button></Link>
            {courseData.filter(course => course.id === id).map((course, index) => (
            <div className="text-white my-3" key={index}>
              <h2>Introduction to {course.name} </h2>
              <div className="my-3">
                <div>
                  <h4 className="my-3">Intro</h4>
                  <p>{course.details.intro}</p>
                </div>
                <div>
                  <h4 className="my-3">Our Branches:</h4>
                  <ul>
                    {course.details.branches.map((branch, index) => (
                      <li key={index}>{branch}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )) }
        </div>
      </div>
    </>
  );
};

export default SingleCourse;
