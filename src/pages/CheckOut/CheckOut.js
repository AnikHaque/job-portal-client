import React from "react";
import { useLoaderData } from "react-router-dom";
import { MdOutlinePayment } from "react-icons/md";
import { FaStar } from "react-icons/fa";

const CheckOut = () => {
  const data = useLoaderData();
  const { img, courseName, rattings, length } = data;
  return (
    <div className="container mx-auto">
      <div className=" md:flex pt-8">

        <div className="md:w-1/2  text-start px-5">
          <h2 className="text-2xl font-semibold mb-3">Complete Payment</h2>
          <p className="text-gray-200">
            <span className="font-semibold "> 1: Account Creation</span> |{" "}
            <span className="font-semibold text-teal-600">
              2: Payment Details
            </span>
          </p>
          <h1 className="text-2xl font-bold mt-7 mb-2">Secure Checkout</h1>
          <p className="font-semibold text-gray-400">
            {" "}
            <MdOutlinePayment className="inline"></MdOutlinePayment> Payment
            Method
          </p>
          <div className="mt-4">
            <div className="form-control ">
              <label className="label">
                <span className="label-text font-semibold">
                  Credit or Debit Card
                </span>
              </label>
              <input
                type="text"
                placeholder="card number"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Name on the Card</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <button className="btn btn-primary bg-teal-600 border-0 w-full my-8">
               Purchase Complete
            </button>
            
          </div>
        </div>

        <div className="md:w-1/2 ">
          <div>
            <div className="">
              <div className="card  w-2/3 mx-auto rounded-lg card-compact  bg-base-100 shadow-lg ">
                <figure className="h-52 w-full">
                  <img className="w-full" src={img} alt="" />
                </figure>
                <div className="card-body  bg-gray-900 text-start">
                  <div className="">
                    <h2 className="card-title text-white mt-1">{courseName}</h2>
                  </div>
                  <div className="mt-4">
                    <span>
                      <FaStar className="text-teal-500 mr-1 inline"></FaStar>{" "}
                      {rattings}
                    </span>
                    <span>
                      <FaStar className="text-teal-500 mr-1 inline"></FaStar>{" "}
                      {rattings}
                    </span>
                    <span>
                      <FaStar className="text-teal-500 mr-1 inline"></FaStar>{" "}
                      {rattings}
                    </span>
                    <span>
                      <FaStar className="text-teal-500 mr-1 inline"></FaStar>{" "}
                      {rattings}
                    </span>
                    <span>
                      <FaStar className="text-teal-500 mr-1 inline"></FaStar>{" "}
                      {rattings}
                    </span>
                    
                    <span>{length}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default CheckOut;
