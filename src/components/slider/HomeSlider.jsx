import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeSlider.scss";

  
          

export default function SimpleSlider() {
        const navigate = useNavigate();
        const [input, setInput] = useState("");


        const goToContact= () =>{
                navigate("/contact")
        };


  const handleSearch= () => {
    if (input.trim() !== "") {
    navigate(`/gigs?search=${input}`);
    setInput("");
  }
  }

  var settings = {
       
    infinite: true,
    //speed: 500,
    slidesToShow: 1,
    //slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    //variableWidth: true,
    adaptiveHeight: true
  };
  return (
    <Slider {...settings}>
        {/* First slide */}
        <div className="image-slider">
  <h1 className="header">Find the Right Design Services online</h1>
  <div className="content">
    <h2 className="header-sub">Graphics Design</h2>
    
  </div>
  <img src="/img/businessman1.jpg" alt="Guy working on a gig" />
  <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search a service"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleSearch}>
        Search
      </button>
    </div>
  <button className="quotebutton" onClick={goToContact}>
    Get Quote
  </button>
</div>
{/* Second Slide */}
<div className="image-slider">
  <h1 className="header">Find the Right Design Services online</h1>
  <div className="content">
    <h2 className="header-sub">Web Design</h2>
    
  </div>
  <img src="/img/workingenv.jpg" alt="Pics of digital working environment" />
  <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search a service"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleSearch}>
        Search
      </button>
    </div>
  <button className="quotebutton" onClick={goToContact}>
    Get Quote
  </button>
</div>

{/* Third Slide */}
<div className="image-slider">
  <h1 className="header">Find the Right Design Services online</h1>
  <div className="content">
    <h2 className="header-sub">Illustration</h2>
    
  </div>
  <img src="/img/danthamos.jpg" alt="Pics of a girl working on graphics" />
  <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search a service"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleSearch}>
        Search
      </button>
    </div>
  <button className="quotebutton" onClick={goToContact}>
    Get Quote
  </button>
</div>

      
    </Slider>
  );
}

