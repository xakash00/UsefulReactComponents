import React from "react";

const NavBar = (props) => {
  return (
    <>
      <div>
        <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <div className="form-check form-switch">
              <input
                onClick={props.toggle}
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label
                className={`form-check-label text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                {`${
                  props.mode === "light"
                    ? "Enable dark mode"
                    : "Enable light mode"
                }`}
              </label>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
