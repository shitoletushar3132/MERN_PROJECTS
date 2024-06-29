import { latitude, longitude } from "./getCurrent";
let name;
if (latitude && longitude) {
  let url = fetch(
    `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=5&appid=508e65af6d019e55904d0b72c1d2d907`
  );
  url.then((res) => res.json).then((name = data.name));
}
const dataInti = {
  city: name,
  feelsLike: 24.84,
  temp: 25.05,
  // tempMin: 25.05,
  // tempMax: 25.05,
  tempMin: latitude,
  tempMax: longitude,
  humidity: 47,
  weather: "haze",
};

export { dataInti };
