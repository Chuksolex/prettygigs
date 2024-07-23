import "./Career.css";

const Career = () => {
  return (
    
    <div className='career mt-5 container'>
        <h1>Grow your career With Our Team</h1>
        <hr />
        <p>We have created a good team to work with. If you are talented and have reputable character, you might be the one we are looking for.</p>
        <div className="innerContainer mt-5">
            <div className="lookingfor">
                <h3>We are looking for:</h3>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h4 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Digital Marketer
                        </button>
                        </h4>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <h5>Job Description:</h5>
                            <p>Are you an experienced digital marketer with the know-how of selling a brand using digital platforms? Do you have indept knowledge of SEO, Facebook Ads, Google Ads, Lead generation, Email marketing, social media engagement, and how to promote and sell digital products?</p>
                            <p>We are looking for a digital marketer like you to join our team. He/she will be working with our in-house team to drive brand awareness, generate leads, and attract sales for us and our clients using digital tools and funnels.</p>
                            <h6>Requirement:</h6>
                            <ul >
                                <li>Indept knowledge of digital marketing</li>
                                <li>must be self motivated</li>
                                <li>Strong work ethics</li>
                                <li>Must deliver measurable results</li>
                                <li>Must have a laptop that is in good working condition</li>
                                <li>Must be ready to work full time.</li>
                                
                            </ul>
                            <button type="button" class="btn btn-outline-primary">Apply Now</button>

                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h4 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Business Developer
                        </button>
                        </h4>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <h5>Job Description:</h5>
                            <p>We understand that our customers are at the kings of our business and growth as an organisation. We exist to build for our customers and we are committed to providing digital solutions in tech, trainings, and innovation that meet their needs at all times.</p>
                            <p>It is the role of Business Developers is to attract new customers and ensure they get the best services that keeps them loyal to us. If you are gifted and skilled in customer acquisition and customer management, then this job may be for you. As a Business Developer, you will be leading our marketing programs for increased sales and customer retention.</p>
                            <h6>Requirement:</h6>
                            <ul >
                                <li>Ability to meet sales target</li>
                                <li>Must have a good social skills</li>
                                <li>Strong work ethics</li>
                                <li>Good communication skills.</li>
                                <li>Must have a track of record in sales</li>
                                <li>Have worked in a similar role before.</li>
                                
                            </ul>
                            <button type="button" class="btn btn-outline-primary">Apply Now</button>

                        </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Accordion Item #3
                        </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="whyjoin">
                <h3>Why join our team?</h3>

            </div>

        </div>

    </div>
  );
};

export default Career;
