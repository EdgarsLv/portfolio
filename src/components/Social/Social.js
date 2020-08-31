import React, { Fragment } from "react";
import { AiFillGithub, AiOutlineGithub, AiOutlineUsb } from "react-icons/ai";
import "./Social.css";

const Social = () => {
  return (
    <Fragment>
      <a href="https://github.com/EdgarsLv/portfolio" target="blank">
        <i className="soc">
          <AiFillGithub />
        </i>
      </a>
      <i>
        <AiOutlineUsb />
      </i>
      <i>
        <AiOutlineGithub />
      </i>
    </Fragment>
  );
};

export default Social;
