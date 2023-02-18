import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Profile = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <button onClick={handleLogOut} className="btn btn-accent my-5 text-white">
        Log Out
      </button>
    </div>
  );
};

export default Profile;