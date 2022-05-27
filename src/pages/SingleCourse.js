import React from "react";
import { Button } from 'react-bootstrap';
import Sidebar from "../component/Sidebar";

const SingleCourse = () => {
  return (
    <>
      <div className="sideBar-usage">
        <Sidebar />
        <div className="m-5">
          <Button>Go Back</Button>
            <div className="text-white">
                <h2 className="my-3">Introduction to Course</h2>
                <div className="">
                <div>
                  <h4 className="my-3">Intro</h4>
                  <p className="my-3">Course Info</p>
                </div>
                <div>
                  <h4 className="my-3">Our Branches:</h4>
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
