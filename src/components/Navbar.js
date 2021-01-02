import React from "react";
import router from "../router/index";

const Navbar = ({ appname }) => {
  return (
    <nav className="navbar">
      <div className="navbar-title">{appname}</div>
      <div className="navbar-menu">
        {router.map((view, i) => (
          <div className="navbar-menu" key={i}>
            {view.name}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
