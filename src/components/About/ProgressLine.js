import React from "react";

const ProgressLine = (props) => {
  return (
    <div className="progr">
      <div
        className="progr-bar"
        data-resent={props.width}
        style={{ width: props.width, background: "var(--accent-clr)" }}
      ></div>
    </div>
  );
};

export default ProgressLine;
