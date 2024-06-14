import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import { dataInti } from "./init";
import "./WeatherApp.css";
import AdditionalCity from "./component/AdditionalCity";
export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState(dataInti);

  let updateInfo = (info) => {
    setWeatherInfo(info);
  };
  return (
    <>
      <div
        className="bg-cover bg-center w-full h-screen flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/4992819/pexels-photo-4992819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
        }}
      >
        <div className="absolute inset-0 bg-gray-900 opacity-50 blur-lg"></div>
        <div className="w-full relative z-10 text-white">
          <div className="w-full">
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
          </div>
        </div>
      </div>

      <div>
        <div className="text-center font-semibold my-5 text-3xl p-5 md:text-5xl md:my-10">
          Additional Cities Weather
        </div>
        <AdditionalCity />
      </div>
    </>
  );
}
