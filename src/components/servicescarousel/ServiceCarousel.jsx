import React from 'react';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


const ServiceCarousel = () => {
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      //nextArrow: <NextArrow />,
     // prevArrow: <PrevArrow />,
    };
  
  return (
    <div>
      <Slider {...settings}>
      <div>
          <Link to="/services/Writing%20&%20Translation">
       
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
        
    </Slider>
    </div>
  );
};

export default ServiceCarousel;
