import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { user_id } = useParams();
  return (
    <div className="bg-gray-600 text-white text-3xl">User : {user_id}</div>
  );
}

export default User;
