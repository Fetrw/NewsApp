import React from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

interface HeaderProps {
  isAuthenticated: boolean;
  handleLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isAuthenticated, handleLogout }) => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          NewsApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                className={classNames("nav-link", {
                  active: location.pathname === "/",
                })}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={classNames("nav-link", {
                  active: location.pathname === "/news",
                })}
                to="/news"
              >
                News
              </Link>
            </li>
            {isAuthenticated ? (
              <li className="nav-item">
                <Link
                  className={classNames("nav-link", {
                    active: location.pathname === "/profile",
                  })}
                  to="/profile"
                >
                  Profile
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link
                  className={classNames("nav-link", {
                    active: location.pathname === "/login",
                  })}
                  to="/login"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
