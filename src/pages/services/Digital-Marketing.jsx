import React, { useState, useEffect } from 'react';
import './Reuse.scss';
import { useSelector } from 'react-redux';
import GigCard from "../../components/gigCard/GigCard";

const DigitalMarketing = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const data = useSelector(state => state.gigsSlice?.data);
    console.log("gigs fetched in DigitalMarketing services?:", data);
    const gigsAlone = data?.gigs;
    console.log("gigalone seen at DigitalMarketing services:", gigsAlone);

    function filterDigitalGigs(gigsAlone) {
        const keywords = ['social media marketing', 'ads', 'digital-marketing', 'digital-marketing', 'page-optimization', 'facebook', 'google ads', 'faceboom ads', 'promote', 'advert', 'campaign', 'targeted ads'];
        return gigsAlone?.filter(advertgig =>
            keywords.some(keyword => advertgig.title?.toLowerCase().includes(keyword))
        );
    }

    const DigitalMarketingGigs = filterDigitalGigs(gigsAlone);

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
            <h1 className='aboutHeading'>Digital-Marketing</h1>
            <div><h2 className='aboutHeading'>Welcome to PrettyGigs Digital Marketing Services

</h2>

            <p className='aboutIntro'>
            Are you ready to elevate your brand's presence and drive unmatched results? At PrettyGigs, we specialize in delivering top-notch DigitalMarketing solutions tailored to your unique needs. Our expert team combines cutting-edge strategies with creative flair to ensure your message reaches the right audience, every time.
            </p></div>
            

            <div className='left-column'>
                <h2> Why Choose PrettyGigs for Your Digital-Marketing Needs?</h2>
                <p><em><strong>Tailored Strategies:</strong></em>  We understand that every business is unique. Our solutions are customized to fit your specific goals and industry.</p>
                <p><em><strong>Experienced Team:</strong></em>   Our skilled professionals stay ahead of the latest digital marketing trends to keep you competitive.</p>
                <p><em><strong>Data-Driven Approach: </strong></em>  We rely on data and analytics to measure success and continuously improve our strategies.</p>
                <p><em><strong>Client-Centric Focus:</strong></em>  Your success is our priority. We work closely with you to ensure your satisfaction and achieve outstanding results.</p>
                <p><em><strong>Multi-Platform Expertise:</strong> </em> Maximize your reach across social media, search engines, and more.</p>
            </div>

            <div className='right-column'>
                <h2>Platform Coverage:</h2>
                <p><strong>Social Media Marketing:</strong> Engage and grow your audience with targeted campaigns on platforms like Facebook, Instagram, LinkedIn, and more. We craft compelling content and manage your social media profiles to maximize your reach and impact.</p>
                <p><strong>Search Engine Optimization (SEO):</strong> Boost your website’s visibility on search engines with our comprehensive SEO services. From keyword research to on-page optimization and link building, we help you rank higher and attract more organic traffic.</p>
                <p><strong>Pay-Per-Click Advertising (PPC): </strong> Drive instant traffic and conversions with our expertly managed PPC campaigns on Google Ads, Bing Ads, and social media platforms. We optimize your ad spend to deliver the best ROI.</p>
                <p><strong>Content Marketing: </strong> Tell your brand’s story with high-quality content that resonates with your audience. Our content marketing services include blog writing, video production, infographics, and more to enhance your brand’s authority and engagement.</p>
                <p><strong>Email Marketing: </strong> Nurture leads and retain customers with personalized email campaigns. We design, execute, and analyze email marketing strategies that drive results and foster long-term relationships.</p>
                <p><strong>Website Design and Development: </strong> Create a stunning, user-friendly website that converts visitors into customers. Our design and development team builds responsive, SEO-friendly websites that reflect your brand’s identity.</p>




            </div>

            <div className='left-column'>
            



                <h2> Don’t settle for ordinary.</h2>
                <p>Let PrettyGigs transform your DigitalMarketing into a powerhouse of growth and success.!</p>
                <p>📞 Contact us today to discover how we can amplify your brand’s voice and deliver exceptional results.
</p>
            </div>

            <div className='right-column'>
                <h3>Available Digital-Marketing Gigs:</h3>
                <p>Below are Digital-Marketing gigs you can order immediately if the description on any of them meets your
                    requirement. The jobs are delivered professionally by our in-house experts as promoted. You can also request a custom order by filling your requirement using our custom job posting option by going to contact page on this website.
                </p>
            </div>

            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4'>
                {loading && <div>Loading...</div>}
                {error && <div>Error: {error}</div>}
                {DigitalMarketingGigs?.length > 0 ? (
                    DigitalMarketingGigs.map((gigg) => (
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

export default DigitalMarketing;
