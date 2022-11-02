import { FaTimes, FaBars } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  const [Open, setOpen] = useState(false);
  return (
    <header className=" bg-white ">
      <section className="container mx-auto py-4 px-8 z-[1000] relative bg-white">
        <div className="flex justify-between text-gray-400 font-thin  text-xl items-center">
          <span className="font-extrabold  tracking-tighter text-5xl md:text-6xl lg:text-8xl sm:space text-black">
            Arch
          </span>
          <div>
            <ul className="sm:flex hidden space-x-6 text-2xl ">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? " active" : "link")}
              >
                Home
              </NavLink>
              <NavLink
                to="Portfolio"
                className={({ isActive }) => (isActive ? " active" : "link")}
              >
                Portfolio
              </NavLink>
              <NavLink
                to="About"
                className={({ isActive }) => (isActive ? " active" : "link")}
              >
                About Us
              </NavLink>
              <NavLink
                to="Contact"
                className={({ isActive }) => (isActive ? " active" : "link")}
              >
                Contact Us
              </NavLink>
            </ul>

            <span
              onClick={() => {
                setOpen(!Open);
              }}
              className="sm:hidden cursor-pointer"
            >
              {Open ? <FaTimes size={25} /> : <FaBars size={25} />}
            </span>
          </div>
        </div>
      </section>
      <hr className="border-b-2 border-black" />
      <div
        className={`nav duration-1000 ${
          Open ? "z-[99] " : "-translate-y-[700px] "
        }`}
      >
        <ul className="flex flex-col space-y-8 pt-8 text-center text-4xl w-fit mx-auto ">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? " active" : "link ")}
          >
            Home
          </NavLink>
          <NavLink
            to="Portfolio"
            className={({ isActive }) => (isActive ? " active" : "link")}
          >
            Portfolio
          </NavLink>
          <NavLink
            to="About"
            className={({ isActive }) => (isActive ? " active" : "link")}
          >
            About Us
          </NavLink>
          <NavLink
            to="Contact"
            className={({ isActive }) => (isActive ? " active" : "link")}
          >
            Contact Us
          </NavLink>
        </ul>
      </div>
    </header>
  );
}
export default Navbar;
