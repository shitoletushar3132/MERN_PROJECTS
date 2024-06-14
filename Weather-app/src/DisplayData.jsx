export default function DisplayData({info}) {

  return (
    <>
      <div className="text-xl">Temperature = {info.temp}&deg;c</div>
      <div className="text-xl">Humidity = {info.humidity}</div>
      <div className="text-xl">Min Temp = {info.tempMin}&deg;c</div>
      <div className="text-xl">Max Temp = {info.tempMax}&deg;c</div>
      <div className="text-sm font-bold">
        The weather can be described as <b>{info.weather}</b> and feels like{" "}
        {info.feelsLike}&deg;c
      </div>
    </>
  );
}
