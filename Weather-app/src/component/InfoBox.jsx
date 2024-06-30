import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import { ImageSet } from "./helper";
import DisplayData from "./DisplayData";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AirIcon from "@mui/icons-material/Air";
import PreviousWeather from "./PreviousWeather";

export default function InfoBox({ info }) {
  return (
    <>
      <div className="InfoBox w-full flex justify-center py-1">
        <div className="cardContainer w-full max-w-xl bg-white rounded-lg shadow-lg overflow-hidden mx-2">
          <Card sx={{ maxWidth: "100%", borderRadius: 2, boxShadow: 3 }}>
            <CardMedia
              sx={{ height: 150 }}
              image={
                ImageSet(info.humidity, info.temp, info.clouds, info.windSpeed)
                  .img
              }
              title="weather"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="flex items-center justify-center"
              >
                {info.city}
                {info.humidity >= 30 &&
                info.humidity <= 50 &&
                info.temp < 15 ? (
                  <AcUnitIcon className="ml-2" />
                ) : info.humidity > 50 &&
                  info.humidity <= 60 &&
                  info.temp >= 15 &&
                  info.temp <= 30 ? (
                  <WbSunnyIcon className="ml-2" />
                ) : info.humidity > 60 &&
                  info.humidity <= 100 &&
                  info.temp >= 15 ? (
                  <ThunderstormIcon className="ml-2" />
                ) : (
                  <AirIcon className="ml-2" />
                )}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                component="span"
                className="text-center"
              >
                <DisplayData info={info} />
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="m-2">
        <PreviousWeather cityName={info.city} />
      </div>
    </>
  );
}
