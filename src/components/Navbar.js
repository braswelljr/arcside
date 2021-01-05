import { useState } from "react";
import router from "../router/index";
import { NavLink } from "react-router-dom";

const Navbar = ({ appname }) => {
  const [handle, useHandle] = useState(false);
  const handleMenu = () => useHandle(!handle);

  return (
    <nav className="px-4 py-2 transition-all duration-300 ease-in origin-top transform bg-teal-700 sm:px-10 text-warmgray-800 md:px-20 lg:px-24 md:flex md:items-center md:justify-between">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold uppercase">{appname}</h2>
        <button
          type="button"
          onClick={handleMenu}
          className={`focus:outline-none md:hidden ${
            handle ? `` : `space-y-1.5`
          }`}
        >
          <div
            className={`w-6 h-1 transition-all duration-200 ease-in bg-warmgray-800 ${
              handle ? `transform rotate-45` : ``
            }`}
          ></div>
          <div
            className={`w-6 h-1 transition-all duration-200 ease-in bg-warmgray-800 ${
              handle ? `transform rotate-135 -mt-1` : ``
            }`}
          ></div>
        </button>
      </div>
      <div className={`md:flex md:space-x-2 ${!handle ? `hidden` : `block`}`}>
        {router.map((view, i) => (
          <NavLink
            to={view.path}
            exact
            key={i}
            activeClassName={`bg-warmgray-800 text-teal-700`}
            className={`px-3 block py-1 text-xl font-medium uppercase transition-all duration-150 ease-in curser-pointer hover:bg-warmgray-800 hover:text-teal-700`}
          >
            {view.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
