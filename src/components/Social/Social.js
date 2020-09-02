import React, { Fragment } from "react";
import { AiFillGithub, AiOutlineLinkedin, AiOutlineUsb } from "react-icons/ai";
import "./Social.css";

const Social = () => {
  return (
    <Fragment>
      <a href="https://github.com/EdgarsLv/portfolio" target="blank">
        <i className="git">
          <AiFillGithub />
        </i>
      </a>
      <i>
        <AiOutlineLinkedin />
      </i>
      <i>
        <AiOutlineUsb />
      </i>
    </Fragment>
  );
};

export default Social;
