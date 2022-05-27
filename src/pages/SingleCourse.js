import React from "react";
import Sidebar from "../component/Sidebar";

const SingleCourse = () => {
  return (
    <>
      <div className="sideBar-usage">
        <Sidebar />
        <div>
            <div>
                <h2>Introduction to Course</h2>
                <div className="">
                <div>
                  <h4>Intro</h4>
                  <p>Course Info</p>
                </div>
                <div>
                  <h4>Our Branches:</h4>
                  <ul>
                    <li>Course Branch</li>
                    <li>Course Branch</li>
                    <li>Course Branch</li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default SingleCourse;
