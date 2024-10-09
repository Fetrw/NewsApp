import React from "react";
import { Link, useNavigate } from "react-router-dom";

interface ProfileProps {
  onLogout: () => void;
}

const Profile: React.FC<ProfileProps> = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Profile</h2>
      <p className="lead">You are now logged in. Welcome to your profile!</p>
      <div className="text-center">
        <Link to="/" className="btn btn-secondary">
          Go to Home
        </Link>
        <Link to="/news" className="btn btn-primary ml-2">
          View News
        </Link>
        <button onClick={handleLogout} className="btn btn-danger ml-2">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
