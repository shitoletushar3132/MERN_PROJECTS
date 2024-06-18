import React from "react";
import DSA from "../assets/portfolio/DSA.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import wanderLust from "../assets/portfolio/wanderLust.png";
import fiftyDay from "../assets/portfolio/FiftyDays.jpg";
import reactWeather from "../assets/portfolio/weatherApp.png";
import mern from "../assets/portfolio/mern.png";

function Portfolio() {
  const portfolios = [
    {
      id: 1,
      src: wanderLust,
      title: "WanderLust (Airbud)",
      demo: "https://wanderlustproject-2f9p.onrender.com/listings",
      code: "https://github.com/shitoletushar3132/WanderLustProject/tree/main",
    },
    {
      id: 2,
      src: fiftyDay,
      title: "50 Day 50 Project",
      demo: "https://shitoletushar3132.github.io/web-projects/",
      code: "https://github.com/shitoletushar3132/web-projects",
    },
    {
      id: 3,
      src: reactWeather,
      title: "Weather App",
      demo: "https://weather-app-y5zv.onrender.com/",
      code: "https://github.com/shitoletushar3132/MERN_PROJECTS/tree/main/Weather-app",
    },
    {
      id: 4,
      src: installNode,
      title: "Node Js server with authentication",
      demo: "https://github.com/shitoletushar3132/Web-development/tree/main/project%20contact%20management",
      code: "https://github.com/shitoletushar3132/Web-development/tree/main/project%20contact%20management",
    },
    {
      id: 5,
      src: DSA,
      title: "Data Structure and Algorithm",
      demo: "https://github.com/shitoletushar3132/DSA",
      code: "https://github.com/shitoletushar3132/DSA",
    },
    {
      id: 6,
      src: mern,
      title: "Mern Development",
      demo: "https://github.com/shitoletushar3132/Web-development",
      code: "https://github.com/shitoletushar3132/Web-development",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, title, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <p className="text-center text-xl font-bold mt-3 text-amber-500">
                {title}
              </p>

              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 text-gray-300 hover:scale-105">
                  <a href={demo} target="_blank"  rel="noreferrer">
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 text-gray-300 hover:scale-105">
                  <a href={code} target="_blank"  rel="noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
