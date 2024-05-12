import "./AboutMarketPlace.scss";

const AboutMarketPlace = () => {
  return (
   
      <div className="aboutmarketplace">
        <div className="item">
          <h3>Digital Services at your beck and call</h3>
          <div className="title">
            <i className="bi bi-check-square-fill" style={{color:"green"}}></i>
            Meets every budget
          </div>
          <p>Access quality gigs and services at the prices you can afford</p>

          <div className="title">
          <i className="bi bi-check-square-fill " style={{color:"green"}}></i>
            Tested Freelancers.
          </div>
          <p>Get your work done by tested and trusted professionals</p>
          <div className="title">
          <i className="bi bi-check-square-fill " style={{color:"green"}}></i>
            Secured Payment Gateways and method.
          </div>
          <p>Fund not released to gig providers until you approve</p>

          <div className="title">
          <i className="bi bi-check-square-fill " style={{color:"green",}}></i>
            Effective Support System.
          </div>
          <p>We provide round-the-clock support and project-based pricing.</p>
        </div>

        <div className="item">
          <video src="" controls></video>
        </div>
      </div>
    
  );
};

export default AboutMarketPlace;
