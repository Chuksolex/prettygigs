import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./GigSlider.scss";

  
          

export default function GigSlider({images}) {
      
       


     


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
        {images.map((image, i) => (
          <div key={i}>
            <img src={image} alt="" style={{ width: '100%', height: 'auto' }} />
          </div>
        ))}

      
    </Slider>
  );
}

