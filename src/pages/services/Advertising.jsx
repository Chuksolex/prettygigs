import React, { useState, useEffect } from 'react';
import './Reuse.scss';
import { useSelector } from 'react-redux';
import GigCard from "../../components/gigCard/GigCard";

const Advertising = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const data = useSelector(state => state.gigsSlice?.data);
    console.log("gigs fetched in Advertising services?:", data);
    const gigsAlone = data?.gigs;
    console.log("gigalone seen at Advertising services:", gigsAlone);

    function filterAdvertGigs(gigsAlone) {
        const keywords = ['ad', 'ads', 'facebook', 'google ads', 'faceboom ads', 'promote', 'advert', 'campaign', 'targeted ads'];
        return gigsAlone?.filter(advertgig =>
            keywords.some(keyword => advertgig.title?.toLowerCase().includes(keyword))
        );
    }

    const advertisingGigs = filterAdvertGigs(gigsAlone);

    useEffect(() => {
        if (data) {
            setLoading(false);
        } else {
            setError('No data available');
            setLoading(false);
        }
    }, [data]);

    return (
        <div className="about-container">
            <h1 className='aboutHeading'>Advertising</h1>
            <div><h2 className='aboutHeading'>Unlock the Power of Targeted Ads with PrettyGigs!

</h2>

            <p className='aboutIntro'>
            Are you ready to elevate your brand's presence and drive unmatched results? At PrettyGigs, we specialize in delivering top-notch advertising solutions tailored to your unique needs. Our expert team combines cutting-edge strategies with creative flair to ensure your message reaches the right audience, every time.
            </p></div>
            

            <div className='left-column'>
                <h2> Why Choose PrettyGigs for Your Advertising?</h2>
                <p><em><strong>Precision Targeting:</strong></em> Reach your ideal customers with pinpoint accuracy.</p>
                <p><em><strong>Creative Excellence:</strong></em>  Captivate your audience with visually stunning and compelling ads.</p>
                <p><em><strong>SEO Optimized:</strong></em>  Optimize your campaigns with real-time analytics and expert insights.</p>
                <p><em><strong>Data-Driven Insights:</strong></em> Efficient processes to get your site up and running quickly.</p>
                <p><em><strong>Multi-Platform Expertise:</strong> </em> Maximize your reach across social media, search engines, and more.</p>
            </div>

            <div className='right-column'>
                <h2>Multi-Platform Coverage:</h2>
                <p><strong>Social Media:</strong> Facebook, Instagram, Twitter, LinkedIn - Engage with followers and boost brand awareness.</p>
                <p><strong>Search Engines:</strong> Appear at the top of search results and attract ready-to-buy customers..</p>
                <p><strong>Display Networks:</strong> Showcase your ads on high-traffic websites and increase visibility.</p>
                <p><strong>Video Platforms:</strong> YouTube, TikTok, e.t.c. - Capture attention with our dynamic video content and storytelling.</p>
                <p><strong>Email Marketing:</strong> Email design, copy, and overall growth; Connect directly with your audience and nurture leads with personalized campaigns.</p>
                <p><strong>Influencer Partnerships:</strong> Leverage our connection to trusted voices to expand your reach and credibility..</p>
                <p><strong>Content Marketing:</strong> Create valuable content that drives engagement and builds trust.</p>




            </div>

            <div className='left-column'>
            



                <h2> Don’t settle for ordinary.</h2>
                <p>Let PrettyGigs transform your advertising into a powerhouse of growth and success.!</p>
                <p>📞 Contact us today to discover how we can amplify your brand’s voice and deliver exceptional results.
</p>
            </div>

            <div className='right-column'>
                <h3>Available Advertising Gigs:</h3>
                <p>Below are Advertising gigs you can order immediately if the description on any of them meets your
                    requirement. The jobs are delivered professionally by our in-house experts as promoted. You can also request a custom order by filling your requirement using our custom job posting option by going to contact page on this website.
                </p>
            </div>

            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4'>
                {loading && <div>Loading...</div>}
                {error && <div>Error: {error}</div>}
                {advertisingGigs?.length > 0 ? (
                    advertisingGigs.map((gigg) => (
                        <div className="col" key={gigg._id}>
                            <GigCard currencyCode={data?.currencyCode} item={gigg} />
                        </div>
                    ))
                ) : (
                    !loading && !error && <div>No gigs found</div>
                )}
            </div>
        </div>
    );
};

export default Advertising;
