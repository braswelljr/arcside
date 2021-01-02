import { useEffect, useState } from "react";
import router from "../router/index";

const Navbar = ({ appname }) => {
  const [handle, useHandle] = useState("off");
  useEffect(() => {}, []);

  return (
    <nav className="">
      <div className="">{appname}</div>
      <button
        type="button"
        className=""
        onClick={() => (handle === "off" ? useHandle("on") : useHandle("off"))}
      >
        <div className=""></div>
        <div className=""></div>
      </button>
      <div className="">
        {router.map((view, i) => (
          <div className="" key={i}>
            {view.name}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
