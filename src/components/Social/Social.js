import React, { Fragment } from "react";
import { AiFillGithub, AiOutlineGithub, AiOutlineUsb } from "react-icons/ai";

const Social = () => {
  return (
    <Fragment>
      <i>
        <AiFillGithub />
      </i>
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
