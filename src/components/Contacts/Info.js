import React from "react";
import { BsEnvelope, BsTablet, BsMap } from "react-icons/bs";

const Info = () => {
  return (
    <div className="col-md-6 col-sm-12">
      <div data-aos="zoom-in" data-aos-duration="700" className="infos">
        <h2>Edgars</h2>
        <div className="email">
          <i>
            <BsEnvelope />
          </i>
          <span style={{ marginLeft: "13px" }}>edgars@pucens.com</span>
        </div>
        <div className="phone">
          <i>
            <BsTablet />
          </i>
          <a href="tel:+37126190707">+371 26190707</a>
        </div>
        <div className="address">
          <i>
            <BsMap />
          </i>
          <span>Valdlauči, Riga</span>
        </div>
      </div>
    </div>
  );
};

export default Info;
