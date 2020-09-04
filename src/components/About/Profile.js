import React from "react";
import { Fade } from "react-awesome-reveal";

const Profile = () => {
  return (
    <div data-aos="zoom-in" className="profile">
      <Fade cascade damping={0.2}>
        <h6>
          <span className="info">Name:</span>
          <span>Edgars Pucens</span>
        </h6>
        <h6>
          <span className="info">Country:</span>
          <span>Latvia</span>
        </h6>
        <h6>
          <span className="info">Address:</span>
          <span>Riga, Valdlauci</span>
        </h6>

        <h6>
          <span className="info">Phone:</span>
          <span>+371 26190707</span>
        </h6>
      </Fade>
      <div className="btn-about" style={{ pointerEvents: "none" }}>
        <a href="/">Download Resume</a>
      </div>
    </div>
  );
};

export default Profile;
