import React, { useState, useEffect } from 'react';
import './Reuse.scss';
import { useSelector } from 'react-redux';
import GigCard from "../../components/gigCard/GigCard";

const Software = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const data = useSelector(state => state.gigsSlice?.data);
    console.log("gigs fetched in software services?:", data);
    const gigsAlone = data?.gigs;
    console.log("gigalone seen at software services:", gigsAlone);

    function filterSoftwareGigs(gigsAlone) {
        const keywords = ['soft-ware', 'software', 'app', 'application', "encryption", 'website security', 'web-development', 'webdevelopment', 'mern', 'backend', 'frontend', 'mongodb', 'database', 'code', 'program', 'programming'];
        return gigsAlone?.filter(softwaregig =>
            keywords.some(keyword => softwaregig.title?.toLowerCase().includes(keyword))
        );
    }

    const SoftwareGigs = filterSoftwareGigs(gigsAlone);

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
            <h1 className='aboutHeading'>Software</h1>
            <div>
            <h2 className='aboutHeading'>Transform Your Digital Landscape with PrettyGigs Software Services!</h2>

            

<p className='aboutIntro'>
At PrettyGigs, we understand that robust software solutions are the backbone of successful digital transformation. Our expert team is dedicated to delivering innovative software services that streamline operations, enhance user experiences, and drive business growth.
</p>


            </div>
            
            <div className='left-column'>
                <h2>🌟 Why Choose PrettyGigs for Your Software Needs?

</h2>
                <p><em><strong>Custom Software Development: </strong></em> Tailored solutions to meet your unique business requirements.</p>
                <p><em><strong>Responsive Layouts:</strong></em> Seamlessly adapt to any device for optimal user experience.</p>
                <p><em><strong>Web & Mobile Applications:</strong></em> Engaging apps that keep your audience connected and engaged.</p>
                <p><em><strong>System Integration:</strong></em> Seamlessly connect your existing systems for improved efficiency.</p>
                <p><em><strong>Cloud Solutions: </strong></em> Scalable and secure cloud services to support your growth.</p>
                <p><em><strong>Maintenance & Support: </strong></em> Reliable support to ensure your software runs smoothly.</p>
                <p><em><strong>Data Analytics:  </strong></em> Turn your data into actionable insights with advanced analytics.</p>


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
                <p>Empower your business with cutting-edge software solutions from PrettyGigs. Let us help you navigate the digital world with ease and confidence.!</p>
            </div>

            <div className='right-column'>
                <h3>Available Software Gigs:</h3>
                <p>Below are Software gigs you can order immediately if the description on any of them meets your
                    requirement. The jobs are delivered professionally by our in-house experts as promoted. You can also request a custom order by filling your requirement by making use of our custom job posting at contact page on this website.
                </p>
            </div>

            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4'>
                {loading && <div>Loading...</div>}
                {error && <div>Error: {error}</div>}
                {SoftwareGigs?.length > 0 ? (
                    SoftwareGigs.map((gigg) => (
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

export default Software;
