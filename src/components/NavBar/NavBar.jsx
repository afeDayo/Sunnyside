import React, { useState } from "react";
import "./NavBar.css";
import logo from "../../../public/logo.svg";
import burger from "../../../public/icon-hamburger.svg";

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div className="nav d-sm-none">
        <nav className="nabbb d-flex justify-content-between p-4 container">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="navbar-hamburger" onClick={handleDropdownToggle}>
            <img src={burger} alt="burger" />
          </div>
          {isDropdownOpen && (
            <div className="navbar-dropdown">
              <ul>
                <li>About</li>
                <li>Services</li>
                <li>Projects</li>
                <li>
                  <button>CONTACT</button>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>

      {/* =======================BIG SCREEN====================== */}
      <div className="d-none d-sm-block">
        <div className="big-nav">
          <div>
            <img src={logo} alt="biglogo" />
          </div>

          <div className="reach d-flex align-items-center gap-5">
            <p>About</p>
            <p>Services</p>
            <p>Projects</p>
            <button>CONTACT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
