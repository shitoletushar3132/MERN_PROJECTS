function ImageSet(humidity, temperature, clouds, windSpeed) {
  const HOT_URL =
    "https://images.unsplash.com/photo-1447601932606-2b63e2e64331?q=80&w=379&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAINY_URL =
    "https://images.unsplash.com/photo-1438449805896-28a666819a20?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const ClOUDY_URL =
    "https://images.unsplash.com/photo-1594156596782-656c93e4d504?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const WINDY_URL =
    "https://images.unsplash.com/photo-1505672678657-cc7037095e60?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const SNOWY_URL =
    "https://images.unsplash.com/photo-1482489603187-f0ae98f407a3?q=80&w=812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const HUMID_URL =
    "https://images.unsplash.com/photo-1562442071-bc0a9dfa090c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const CLEAR_SKY =
    "https://images.unsplash.com/photo-1601297183305-6df142704ea2?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const HOT_AND_HUMID_URL =
    "https://plus.unsplash.com/premium_photo-1691086686871-035de764f69f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const THUNDERSTORM_URL =
    "https://images.unsplash.com/photo-1429552077091-836152271555?q=80&w=385&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let img;
  if (clouds > 50) {
    img = ClOUDY_URL;
  } else if (humidity > 83 && temperature < 15) {
    img = RAINY_URL; // Rainy and cool
  } else if (humidity > 83 && temperature >= 15) {
    img = THUNDERSTORM_URL; // Thunderstorm likely
  } else if (windSpeed > 10) {
    img = WINDY_URL;
  } else if (temperature < 0) {
    img = SNOWY_URL;
  } else if (temperature > 25 && humidity > 70) {
    img = HOT_AND_HUMID_URL; // Hot and humid
  } else if (temperature > 25) {
    img = HOT_URL;
  } else if (humidity > 70) {
    img = HUMID_URL;
  } else {
    img = CLEAR_SKY;
  }

  return { img };
}

let getWeatherInfo = async (city) => {
  try {
    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "508e65af6d019e55904d0b72c1d2d907";
    let url = `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;
    let res = await fetch(url);
    let jsonRes = await res.json();
    let result = {
      city: city.toUpperCase(),
      temp: jsonRes.main.temp,
      tempMin: jsonRes.main.temp_min,
      tempMax: jsonRes.main.temp_max,
      humidity: jsonRes.main.humidity,
      feelsLike: jsonRes.main.feels_like,
      weather: jsonRes.weather[0].description,
      windSpeed: jsonRes.wind.speed,
      clouds: jsonRes.clouds.all,
    };
    return result;
  } catch (err) {
    throw err;
  }
};
export { ImageSet, getWeatherInfo };
