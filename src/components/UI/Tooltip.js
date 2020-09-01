import React from "react";
import "./Tooltip.css";
import { Bounce } from "react-awesome-reveal";

const Tooltip = (props) => {
  let attachedClasses = ["toolti", "close"];
  if (props.show) {
    attachedClasses = ["toolti", "open"];
  }
  return (
    <div className={attachedClasses.join(" ")}>
      <Bounce cascade>
        <h2>Notice!</h2>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </Bounce>
    </div>
  );
};

export default Tooltip;
