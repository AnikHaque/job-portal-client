import React, { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Register = () => {
  const { googleLogIn, gitHubLogIn, createUser, updateUserProfile } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.fullName.value;
    const photo = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        form.reset();
        profileUpdate(name, photo);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleLogIn = () => {
    googleLogIn()
      .then((result) => {
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  const handleGigHubLogIn = () => {
    gitHubLogIn()
      .then((result) => {
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  const profileUpdate = (name, photoURL) => {
    updateUserProfile(name, photoURL)
      .then(() => {})
      .catch((error) => console.error(error));
  };
  
  return (
    <div>
      <div className="p-3  min-h-screen bg-base-200">
        <div className="w-full  flex-col ">
          <div className="flex-shrink-0 rounded-lg w-full md:w-96 mx-auto shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body w-full">
              <h1 className="text-xl font-bold text-white ">Register now!</h1>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="full name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="photo URL"
                  className="input input-bordered"
                  required
                />
              </div>

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
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn border-0 btn-primary bg-teal-600 text-white ">
                  Register
                </button>
              </div>
              <label className="text-center ">
                <Link
                  to="/login"
                  className="label-text-alt link link-hover text-center"
                >
                  Already have an account?
                </Link>
              </label>

              <div className="divider px-5 mt-5">OR</div>
              <div>
              <small>
              Login With Social Account's
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

export default Register;
