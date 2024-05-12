import "./Testimonial.scss";
import { TestimonialData } from "./TestimonialData";




 



export default function Testimonial(){
   
                
    return (
      
        TestimonialData.map((testimonial, index) =>(
          <div key={index} className="testimonialCard">
            <div className="testimonialCardTop">
              <img src={testimonial.image} className="" alt={testimonial.name} />
              <h6>{testimonial.name}</h6>
            </div>

            <div className="testimonialCardDetails">
            <div className="rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`star ${i < testimonial.rating ? 'filled' : ''}`}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
              <p>{testimonial.description}</p>

            </div>



          </div>
        ))




      
     

        
       
      
    );
  };