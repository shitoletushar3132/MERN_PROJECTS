import React from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
const NavBar = () => {
  const [nav, setNav] = useState(false);

  const Links = [
    {
      id: 1,
      link: "/",
      name: "Home",
    },
    {
      id: 2,
      link: "destinations",
      name: "Destinations",
    },
    {
      id: 3,
      link: "planYourTrip",
      name: "Plan Your Trip",
    },
    {
      id: 4,
      link: "gallary",
      name: "Gallery",
    },
    {
      id: 5,
      link: "contact",
      name: "Contact Us",
    },
  ];

  return (
    <div className="w-full h-20 sticky top-0 left-0 p-4 bg-gradient-primary z-10">
      <div className="h-full flex justify-between items-center text-white">
        <div className="">
          <NavLink to={"/"}>
            <h1 className="text-3xl text-[#FFFFFF]">Pilgrim Journey</h1>
          </NavLink>
        </div>
        <div>
          <ul className="hidden md:flex">
            {Links.map(({ id, link, name }) => (
              <li
                key={id}
                className="px-2 text-sm font-medium hover:text-hover hover:scale-110 duration-300"
              >
                <NavLink
                  to={link}
                  className={({ isActive }) => (isActive ? "text-red-500" : "")}
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-white md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen backdrop-blur-lg md:hidden">
            {Links.map(({ id, link, name }) => (
              <li
                key={id}
                className="px-4 font-medium text-xl text-black hover:text-[#79b0e4] hover:scale-110 duration-300"
              >
                <NavLink
                  to={link}
                  onClick={() => {
                    setNav(!nav);
                  }}
                  smooth="true"
                  duration={500}
                  className={({ isActive }) => (isActive ? "text-red-500" : "")}
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavBar;
