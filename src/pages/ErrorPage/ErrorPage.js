import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h2 className="text-4xl font-semibold mt-20">
        Page Not Found <span className="text-red-500 font-bold">404</span>
      </h2>
      <Link to="/">
        <button className="btn btn-sm bg-blue-600 border-0 mt-5">Back</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
