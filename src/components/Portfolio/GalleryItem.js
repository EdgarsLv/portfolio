import React from "react";
import image from "../../assets/images/imag.jpg";

const GalleryItem = () => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div
        data-aos="zoom-in-up"
        data-aos-delay="200"
        data-aos-duration="700"
        className="gallery-item"
      >
        <div className="over">
          <div className="info-img">
            <h4>Title Pro</h4>
            <span>Marketing</span>
          </div>
          {/* <a href="htp://via.placeholder.com/4000x3500">X</a> */}
        </div>
        <img className="img-fluid" src={image} alt="imgPort1" />
      </div>
    </div>
  );
};

export default GalleryItem;
