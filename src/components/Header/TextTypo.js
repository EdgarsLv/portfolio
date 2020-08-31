import React from "react";
import Typed from "react-typed";

const Type = () => {
  return (
    <div className="typo">
      <Typed
        strings={[
          "Welcome to my Portfolio.",
          "I am a Front-end Developer.",
          "I am a Web Designer.",
        ]}
        typeSpeed={100}
        backSpeed={50}
        backDelay={1000}
        loop
        smartBackspace
        className="type"
      ></Typed>
    </div>
  );
};

export default Type;
