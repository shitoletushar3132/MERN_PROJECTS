import React from "react";
import { useState, useEffect } from "react";

function Sliders({ cityName }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        console.log(cityName);
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=508e65af6d019e55904d0b72c1d2d907`
        );
        const data1 = await response.json();

        const tempData = [
          data1.list[5],
          data1.list[11],
          data1.list[21],
          data1.list[31],
          data1.list[39],
        ];

        setData(tempData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [cityName]);

  return (
    <>
      <p className="text-center text-3xl font-bold " name="forecast">
        Weather Forecast
      </p>
      <div className="flex overflow-x-scroll snap-x">
        {data.map((entry, index) => (
          <div
            className="bg-white m-3 text-black text-center rounded-lg py-3 min-w-72 snap-center md:min-w-96"
            key={index}
          >
            <div className="flex justify-start px-3">
              <p className="text-xs text-gray-600">{`Date: ${
                entry.dt_txt.split(" ")[0]
              }`}</p>
            </div>
            <h3 className="text-lg font-serif">
              Temp: {(entry.main.temp - 273.15).toFixed(2)}°C
            </h3>
            <span className="text-2xl font-semibold text-blue-400">
              {entry.weather[0].description}
            </span>
            <div>
              <ul>
                <li>Min Temp: {(entry.main.temp_min - 273.15).toFixed(2)}°C</li>
                <li>Max Temp: {(entry.main.temp_max - 273.15).toFixed(2)}°C</li>
                <li>Humidity: {entry.main.humidity}%</li>
                <li>Wind Speed: {entry.wind.speed} m/s</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Sliders;
