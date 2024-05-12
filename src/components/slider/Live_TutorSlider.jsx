import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Live_TutorSlider.scss";

  
          

export default function Live_TutorSlide() {
        const navigate = useNavigate();
       


        const goRegister= () =>{
                navigate("/live-tutor-register")
        };



  var settings = {
       
    infinite: true,
    //speed: 500,
    slidesToShow: 1,
    //slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    fade: true,
    //variableWidth: true,
    adaptiveHeight: true
  };
  return (
    <Slider {...settings}>
        {/* First slide */}
        <div className="image-slider">
  <h1 className="header">Join Prettygigs Live Coding Tutorial on Google Meet!</h1>
  <h2 className="">Sign Up Ends in Days. Dont Miss The Rare Opportunity. Secure The Future of Your Kids & Teens with Tech skills!

</h2>
  <div className="content">
    <h3 className="header-sub">Learn From Any Part of the World</h3>
    
  </div>
  <img src="/img/littleboy.jpg" alt="little boy doing school work at home" />
  
  <button className="quotebutton" onClick={goRegister}>
    Join The Latest Batch Starting This Week
  </button>
</div>
{/* Second Slide */}
<div className="image-slider">
  <h1 className="header">Join Prettygigs Live Coding Tutorial on Google Meet!

</h1>
<h2 className="">Registration Ends in Days. Dont Miss The Rare Opportunity! Secure The Future of Your Kids & Teens with Tech skills!

</h2>
  <div className="content">
    <h3 className="header-sub">Build Games, Apps, Websites, & Softwares</h3>
    
  </div>
  <img src="/img/kidsoncomputer.jpg" alt="Pics of kids interacting with computer" />
  
  <button className="quotebutton" onClick={goRegister}>
    Join The Latest Batch Starting This Week
  </button>
</div>

{/* Third Slide */}
<div className="image-slider">
  <h1 className="header">Join Prettygigs Live Coding Tutorial on Google Meet!</h1>
  
  <h2 className="">Sign-Up Ends in Days. Dont Miss The Rare Opportunity. Secure The Future of Your Kids & Teens with Tech skills!

</h2>
  <div className="content">
    <h3 className="header-sub">Coding Logics and Fundamentals </h3>
    
  </div>
  <img src="/img/girlsoncomputer.jpg" alt="Pics of a girl working on graphics" />
  
  <button className="quotebutton" onClick={goRegister}>
    Join The Latest Batch Starting This Week
  </button>
</div>

{/* 4th Slide */}
<div className="image-slider">
  <h1 className="header">Join Prettygigs Live Coding Tutorial on Google Meet!</h1>
  
  <h3 className="">Sign Up Ends in Days. Dont Miss The Rare Opportunity. Secure The Future of Your Kids & Teens with Tech skills!

</h3>
  <div className="content">
    <h2 className="header-sub">From Beginner To Advanced </h2>
    
  </div>
  <img src="/img/growth.jpg" alt="Pics of a girl scaling hurdles" />
  
  <button className="quotebutton" onClick={goRegister}>
    Join The Latest Batch Starting This Week
  </button>
</div>

      
    </Slider>
  );
}

