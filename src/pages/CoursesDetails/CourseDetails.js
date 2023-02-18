import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { BsFilePdf } from "react-icons/bs";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const CourseDetails = () => {
  const courseData = useLoaderData();
  const { id, jobdetails, companydetails, name, img,qualification, jobtype, location,} = courseData;
  
  return (
    
        <div>
          <div className="hero min-h-screen pt-44 bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img className="w-[25%] rounded-lg shadow-2xl ms-10 " src={img} alt="" />
                <div>
                    <h1 className="text-5xl font-bold text-teal-500 pb-5">{name}</h1>
                    <h4 className="text-2xl font-bold">{jobtype}</h4>
                    <h4> {location}</h4>
                    <p className="py-6 p-10"><span className="text-teal-500 font-bold text-xl"> Job Details:</span> {jobdetails}</p>
                    <p className="py-6 p-10"><span className="text-teal-500 font-bold text-xl"> Company Details:</span> {companydetails}</p>
                    <p className="py-6 p-10"><span className="text-teal-500 font-bold text-xl"> Qualification:</span> {qualification}</p>
                    
                </div>
                
            </div>
        </div>
        </div>
    
  );
};

export default CourseDetails;
