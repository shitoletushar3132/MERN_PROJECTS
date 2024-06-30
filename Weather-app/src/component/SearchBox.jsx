import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState, useEffect } from "react";
import { getWeatherInfo } from "./helper";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  let handleChange = (event) => {
    setCity(event.target.value);
    setError(false);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setCity("");
      let info = await getWeatherInfo(city);
      updateInfo(info);
    } catch (err) {
      setError(true);
    }
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          console.log(latitude, longitude);
          let url = await fetch(
            `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=5&appid=508e65af6d019e55904d0b72c1d2d907`
          );
          let dataJson = await url.json();
          let cityName = dataJson[0].name;
          if (cityName) {
            let info = await getWeatherInfo(cityName);
            updateInfo(info);
          }
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.log("Geolocation not available");
    }
  }, []);

  return (
    <div className="SearchBox w-full flex flex-col items-center justify-center p-1 md:flex-row" name="home">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md flex flex-col items-center  p-6 rounded-lg space-y-4 "
      >
        <TextField 
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
          className="w-full shadow-xl bg-white bg-opacity-90 rounded-lg"
          InputLabelProps={{ style: { color: "#333" } }} // Adjust label color
          InputProps={{ style: { color: "#333" } }} // Adjust input text color
        />
        <Button
          variant="contained"
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md"
        >
          Search
        </Button>
        {error && <p className="text-red-500 mt-2">No such place exists!</p>}
      </form>
    </div>
  );
}
