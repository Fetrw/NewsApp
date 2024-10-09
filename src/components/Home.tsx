import React from "react";
import { Link } from "react-router-dom";

interface HomeProps {
  isAuthenticated: boolean;
}

const Home: React.FC<HomeProps> = ({ isAuthenticated }) => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Welcome to the News App</h1>
      <p className="lead text-center">
        Stay updated with the latest news articles.
      </p>
      <div className="text-center">
        {!isAuthenticated && (
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        )}
        <Link to="/news" className="btn btn-secondary ml-2">
          View News
        </Link>
      </div>
    </div>
  );
};

export default Home;
