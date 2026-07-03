import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Cricket Team Management
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/players">
                Player List
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/add-player">
                Add Player
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/get-player">
                Get Player
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/get-player-by-team">
                Search By Team
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
