import React from "react";

const About = () => {
  const LiStyle = "p-4 ";
  return (
    <div
      name="about"
      className="w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pt-20">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10 ">
          <span className="block font-bold underline mb-2">
            Career Objective
          </span>
          <div className="p-4">
            As a passionate <i className="text-sky-500">MERN Stack Developer,</i> I aim to leverage my
            expertise in MongoDB, Express.js, React, and Node.js to build
            dynamic and responsive web applications. With a commitment to clean
            code and efficient design, I seek to contribute to innovative
            projects that push the boundaries of web development.
          </div>
        </p>

        <br />

        <p className="text-xl">
          <span className="block font-bold underline mb-2">Education</span>
          <ul>
            <li className={LiStyle}>
              <p>PDEA's College Of Engineering Manjari, pune</p>
              <p className="text-amber-500"> Jun.2021 - May.2025</p>
              <p>
                Bachelor of Engineering in Computer Science - CGPA : 8.33/10
              </p>
            </li>
            <li className={LiStyle}>
              <p>
                Shri Gopinath Secondary Higher Secondary & Technical School,
                Varvand
              </p>
              <p className="text-amber-500">Jan.2020 - May.2021</p>
              <p>CLASS 12th : 87.20%</p>
            </li>
            <li className={LiStyle}>
              <p>
                Shri Gopinath Secondary Higher Secondary & Technical School,
                Varvand
              </p>
              <p className="text-amber-500">Jan.2018 - May.2019</p>
              <p>CLASS 10th - 82.30%</p>
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default About;
