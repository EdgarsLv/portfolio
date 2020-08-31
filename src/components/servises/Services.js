import React from "react";
import Title from "../Title/Title";
import Work from "./Work";
import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      <Title title="Services" content="services" />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="servs">
              <div className="row">
                <Work index="0" title="Web Development" />
                <Work index="1" title="Management" />
              </div>
              <div className="row">
                <Work index="2" title="Design" />
                <Work index="3" title="Support" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div
              data-aos="zoom-in"
              data-aos-duration="700"
              className="serv-video"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
