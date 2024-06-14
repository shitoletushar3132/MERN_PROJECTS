import { useState, useEffect } from "react";
import { getWeatherInfo } from "../helper";


export default function AdditionalCity() {
  const topCitiesInIndia = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Pune",
    "Ahmedabad",
    "Jaipur",
    "Surat",
    "Nashik",
    "Solapur"
  ];

  const [weatherData, setWeatherData] = useState(
    topCitiesInIndia.map((city) => ({ city, temp: null }))
  );

  useEffect(() => {
    async function fetchWeather() {
      const dataPromises = topCitiesInIndia.map(async (city) => {
        try {
          const weatherInfo = await getWeatherInfo(city);
          return { city, temp: weatherInfo.temp };
        } catch (error) {
          console.error(`Failed to fetch weather data for ${city}:`, error);
          return { city, temp: "N/A" };
        }
      });

      const data = await Promise.all(dataPromises);
      setWeatherData(data);
    }

    fetchWeather();
  }, []);

  return (
    <>
      <div className="bg-[#64748b] shadow-lg grid grid-cols-1 gap-3 p-5 place-items-center md:grid-cols-2 lg:grid-cols-3 lg:my-5  md:my-3 md:p-3 lg:p-2 rounded-lg">
        {weatherData.map(({ city, temp }, index) => (
          <div
            key={index}
            className="shadow-inner bg-white border-2 p-4 px-10 text-2xl w-full m-2 rounded-lg flex justify-between"
          >
            <span className="font-semibold">{city}</span>
            <span>{temp !== null ? `${temp} °C` : "Loading..."}</span>
          </div>
        ))}
      </div>
    </>
  );
}
