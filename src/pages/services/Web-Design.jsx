import React, { useState, useEffect } from 'react';
import './Reuse.scss';
import { useSelector } from 'react-redux';
import GigCard from "../../components/gigCard/GigCard";

const WebDesign = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const data = useSelector(state => state.gigsSlice?.data);
    console.log("gigs fetched in web design services?:", data);
    const gigsAlone = data?.gigs;
    console.log("gigalone seen at web-design services:", gigsAlone);

    function filterWebDesignGigs(gigsAlone) {
        const keywords = ['web-design', 'web design', 'redesign', 'landing-page', 'wordpress', 'wix', 'landing page', 'website', 'elementor', 'plugin'];
        return gigsAlone?.filter(webgig =>
            keywords.some(keyword => webgig.title?.toLowerCase().includes(keyword))
        );
    }

    const WebDesignGigs = filterWebDesignGigs(gigsAlone);

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
            <h1 className='aboutHeading'>Web-Design</h1>
            <h2 className='aboutHeading'>Transform Your Online Presence with Our Premier Web Design Services</h2>

            <p className='aboutIntro'>
                Welcome to Prettygigs, Are you ready to elevate your business to new heights? Our in house expert web designers specialize in creating stunning, user-friendly websites that captivate your audience and drive conversions..
            </p>

            <div className='left-column'>
                <h2>Why Choose Us?</h2>
                <p><em><strong>Custom Designs:</strong></em> Tailored to reflect your brand’s unique identity.</p>
                <p><em><strong>Responsive Layouts:</strong></em> Seamlessly adapt to any device for optimal user experience.</p>
                <p><em><strong>SEO Optimized:</strong></em> Boost your visibility and attract more traffic.</p>
                <p><em><strong>Fast Turnaround:</strong></em> Efficient processes to get your site up and running quickly.</p>
                <p><em><strong>Ongoing Support:</strong></em> We're here for you with continuous maintenance and updates.</p>
            </div>

            <div className='right-column'>
                <h2>Why Choose Prettygigs?</h2>
                <p><strong>Expertise:</strong> Our team consists of industry experts and talented professionals dedicated to delivering top-notch services.</p>
                <p><strong>Reliability:</strong> We understand the importance of reliability in the digital landscape. Prettygigs ensures secure transactions and dependable service delivery.</p>
                <p><strong>Customer-Centric Approach:</strong> Your satisfaction is our priority. We are committed to providing excellent customer support and a user-friendly experience.</p>
                <p><strong>Global Network:</strong> Prettygigs operates internationally, connecting users with a diverse pool of skilled professionals from around the world.</p>
            </div>

            <div className='left-column'>
                <h2>Leave an Impression</h2>
                <p>Your website is your digital storefront—make sure it leaves a lasting impression. Partner with us to craft a website that not only looks amazing but also delivers results. Contact us today for a free consultation and let's start building your online success!</p>
            </div>

            <div className='right-column'>
                <h3>Available Web Design Gigs:</h3>
                <p>Below are web-design gigs you can order immediately if the description on any of them meets your
                    requirement. The jobs are delivered professionally by our in-house experts as promoted. You can also request a custom order by filling your requirement, that is, custom job posting, by going to contact page on this website.
                </p>
            </div>

            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4'>
                {loading && <div>Loading...</div>}
                {error && <div>Error: {error}</div>}
                {WebDesignGigs?.length > 0 ? (
                    WebDesignGigs.map((gigg) => (
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

export default WebDesign;
