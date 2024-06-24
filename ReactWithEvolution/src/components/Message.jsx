import { useState } from "react";
const Message = () => {
  let [msg, setMsg] = useState("welcome visitor");
  let [subscribe, setSubscribe] = useState(true);
  const handle = (e) => {
    setMsg("you're subsrcibed");
    setSubscribe(false);
  };
  return (
    <div>
      <h1>{msg}</h1>
      {subscribe && (
        <button onClick={handle} className="btn">
          subscribe
        </button>
      )}
    </div>
  );
};
export default Message;
