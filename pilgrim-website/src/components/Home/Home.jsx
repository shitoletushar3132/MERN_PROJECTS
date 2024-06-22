import React from "react";
import backgroundImage from "../../assets/componentImages/homePageBg.jpg";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

import data from "../Data";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [clickTag, setClickTag] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    searchData(value);
  };

  const clickHandle = (tag) => {
    setClickTag(tag);
    searchData(tag);
  };

  const searchData = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    const filterResult = data.filter((dat) => {
      return (
        dat.name.toLowerCase().includes(lowerCaseQuery) ||
        dat.shortDescription.toLowerCase().includes(lowerCaseQuery) ||
        dat.longDescription.toLowerCase().includes(lowerCaseQuery) ||
        dat.events.some((event) =>
          event.name.toLowerCase().includes(lowerCaseQuery)
        ) ||
        dat.festivals.some((festival) =>
          festival.name.toLowerCase().includes(lowerCaseQuery)
        )
      );
    });
    setSearchResult(filterResult);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchData(searchTerm);
    setSearchTerm("");
  };

  const tags = {
    location: ["Jerusalem", "Mecca", "Varanasi", "Rome", "Kyoto"],
    typeOfPlace: ["Temple", "Mosque", "Church", "Monastery", "Shrine"],
    religiousSignificance: [
      "Hinduism",
      "Islam",
      "Christianity",
      "Buddhism",
      "Sikhism",
    ],
    event: ["Festival", "Ceremony", "Pilgrimage", "Retreat", "Procession"],
    other: ["Mountain", "River", "Historic Site", "Sacred Place"],
  };

  return (
    <div
      className="bg-fixed bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="backdrop-blur-lg text-white p-5 flex flex-col">
        <div className="text-center">
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="destination"
              className=" text-text font-semibold text-3xl md:text-5xl"
            >
              Get Your Destination
            </label>
            <br />
            <input
              id="destination"
              type="text"
              value={searchTerm}
              onChange={handleChange}
              className="bg-black bg-opacity-50 text-xl border-2 border-border rounded-lg 
              focus:outline-none p-1 w-3/4 text-white 
               m-3 shadow-md shadow-orange-100 md:shadow-lg md:shadow-orange-200 hover:scale-95 focus:border-red-400 hover:border-red-400 lg:w-1/2"
            />
            <br className="flex md:hidden" />
            <button
              type="submit"
              className="bg-[#50E3C2]  border-1 border-border rounded-lg p-1 hover:bg-hover hover:scale-105 duration-300 shadow-md shadow-black"
            >
              Get Destination
            </button>
          </form>

          <div className="w-full grid p-10 grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3">
            {(searchTerm || clickTag) &&
              searchResult.map(({ id, imageUrl, name }) => (
                <NavLink key={id} to={`/${name}/${id}`}>
                  <div className="bg-transparent max-w-md flex justify-evenly items-center border py-2 hover:scale-95 hover:bg-blue-200 duration-300 rounded-lg">
                    <div className="rounded-full w-20 h-12 overflow-hidden hover:scale-110 duration-300 ">
                      <img src={imageUrl} alt={name} />
                    </div>
                    <div>
                      <p className="text-xl hover:scale-110 duration-300 font-semibold">
                        {name}
                      </p>
                    </div>
                  </div>
                </NavLink>
              ))}
          </div>
        </div>

        <h2 className="text-3xl font-bold my-5 text-center underline">Tags:</h2>
        <div className="flex flex-wrap gap-5 justify-center items-center">
          {Object.keys(tags).map((category) => (
            <div key={category} className="mb-4 p-1">
              <div className="font-bold text-lg mb-2 ">#{category}</div>
              {tags[category].map((tag) => (
                <button
                  key={tag}
                  onClick={() => clickHandle(tag)}
                  className={`bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-700 m-1
                    ${clickTag == tag ? "bg-green-600" : ""}`}
                >
                  {tag}
                </button>
              ))}
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold my-5 text-center italic underline">
          Trandings
        </h2>
        <div>
          <div className="flex items-center justify-center h-full text-primary">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
              {data
                .filter(({ tranding }) => tranding)
                .map(({ id, imageUrl, name, shortDescription }) => (
                  <div key={id}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        sx={{ height: 140 }}
                        image={imageUrl}
                        title={name}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {shortDescription}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <NavLink key={id} to={`/${name}/${id}`}>
                          <Button size="small">
                            <strong className="text-lg">Get More INFO</strong>{" "}
                          </Button>
                        </NavLink>
                      </CardActions>
                    </Card>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
