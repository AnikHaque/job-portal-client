import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { useState } from "react";

const Login = () => {
  const { googleLogIn, gitHubLogIn, logInWithEmailPassword } =
    useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(null);
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    logInWithEmailPassword(email, password)
      .then((result) => {
        setError(null);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => setError(error.message));
  };

  const handleGoogleLogIn = () => {
    googleLogIn()
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  const handleGigHubLogIn = () => {
    gitHubLogIn()
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="p-3 min-h-screen bg-base-200">
        <div className=" flex-col  mx-auto">
          <div className=" rounded-lg w-full md:w-96 mx-auto shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <h1 className="text-2xl font-bold text-white">Login now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link to="" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary border-0 bg-teal-600 text-white">
                  Login
                </button>
              </div>
              <p className="text-red-500">{error}</p>
              <label className="text-center ">
                <Link
                  to="/register"
                  className="label-text-alt link link-hover text-center"
                >
                  Don't have account?
                </Link>
              </label>
              <div className="divider px-5 mt-5">OR</div>
              <div>
              <small>
              Login With Social Accounts
              </small>
              </div>


                    <div>
                        <button
                            onClick={handleGoogleLogIn}
                            className="items-center  text-white shadow-lg rounded-lg p-1 mb-2 m-1"
                          >
                            <FaGoogle className="text-2xl m-1"></FaGoogle>
                            <p className="flex-grow font-semibold"></p>
                        </button>
                        <button
                            onClick={handleGigHubLogIn}
                            className=" items-center text-white  shadow-lg rounded-lg  p-1 m-1"
                          >
                            <FaGithub className="text-2xl  m-1"></FaGithub>
                            <p className="flex-grow font-semibold"></p>
                        </button>
                  </div>
            </form>
          </div>          
        </div>
      </div>
    </div>
  );
};

export default Login;
