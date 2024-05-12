import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCarousel = () => {
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Link to="/service1">
            <img
              className="d-block w-100"
              src="public/img/contentidea.png"
              alt="Service 1"
              style={{ height: "200px", borderRadius: "10px" }}
            />
          </Link>
        </div>
        <div className="carousel-item">
          <Link to="/service2">
            <img
              className="d-block w-100"
              src="public/img/contentidea2.png"
              alt="Service 2"
              style={{ height: "200px", borderRadius: "10px" }}
            />
          </Link>
        </div>
        <div className="carousel-item">
          <Link to="/service3">
            <img
              className="d-block w-100"
              src="public/img/contentidea3.png"
              alt="Service 3"
              style={{ height: "200px", borderRadius: "10px" }}
            />
          </Link>
        </div>
        <div className="carousel-item">
          <Link to="/project-request">
            <img
              className="d-block w-100"
              src="public/img/contentidea4.png"
              alt="Service 4"
              style={{ height: "200px", borderRadius: "10px" }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCarousel;
