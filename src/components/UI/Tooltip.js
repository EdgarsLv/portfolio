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
          The percentage values does not reflect my current knowledge. Progress
          indicators are only to show in a more interactive way what skills I
          know and continue to learn.
        </p>
      </Bounce>
    </div>
  );
};

export default Tooltip;
