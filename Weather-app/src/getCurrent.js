let longitude;
let latitude;
if ("geolocation" in navigator) {
  // Geolocation is available
  navigator.geolocation.getCurrentPosition(function (position) {
    latitude = position.coords.latitude;
   longitude = position.coords.longitude;
  });
}

export {longitude,latitude}