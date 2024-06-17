import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/shitoletushar3132")
  //       .then((res) => res.json())
  //       .then((data) => setData(data));

  //     console.log(data);
  //   }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github Followers : {data.followers}
      <div className="flex justify-center">
        <img src={data.avatar_url} alt="Git profile photo" width={300} />
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch(
    "https://api.github.com/users/shitoletushar3132"
  );
  return response.json();
};
