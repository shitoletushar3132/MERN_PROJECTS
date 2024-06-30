import React from "react";
import { Link } from "react-scroll";
function NavBar() {
  let NavLinks = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "forecast",
    },
    {
      id: 3,
      link: "additional_data",
    },
  ];
  return (
    <div className=" fixed z-50 w-full h-12 flex justify-between px-2 items-center bg-slate-400 md:px-3">
      <div className="font-bold text-lg cursor-pointer">
        <a href="/home"></a>WeatherWise
      </div>
      <div className="flex">
        <ul className="flex ">
          {NavLinks.map(({ id, link }) => (
            <li
              key={id}
              className="cursor-pointer hover:text-red-500 mr-2 duration-200 md:mr-10 capitalize"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
