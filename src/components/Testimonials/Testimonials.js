import React from "react";
import Title from "../../components/Title/Title";
import Person from "./Person";
import "./Testimonials.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
// import { Zoom } from "react-awesome-reveal";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <Title title="Testimonials" content="testimonials" />
      <div className="container">
        <div className="tabble" style={{ position: "relative" }}>
          <div className="list-tabs">
            <ul className="nav nav-tabs">
              <Person />
              <Person />
              <Person />
              <Person />
              <Person />
            </ul>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="700"
            className="tab-content"
          >
            <div className="tab-pane active">
              <div className="profile-image">
                <div className="image-tabs"></div>
              </div>
              <div className="profile-details">
                <i className="left">
                  <FaQuoteLeft />
                </i>
                <p
                  style={{
                    textAlign: "center",
                    margin: "5px 20px",
                    fontStyle: "italic",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <h4>Edgars Pucens</h4>
                <i className="right">
                  <FaQuoteRight />
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
