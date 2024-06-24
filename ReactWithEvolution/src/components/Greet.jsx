import { Children } from "react";

const Greet = ({ name, code, children }) => {
  return (
    <div>
      <h1>
        Hello {name} where {code}
      </h1>
      {children}
    </div>
  );
};

export default Greet;
