import React, { useState, useEffect } from 'react';
import './Reuse.scss';
import { useSelector } from 'react-redux';
import GigCard from "../../components/gigCard/GigCard";

const Illustration = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const data = useSelector(state => state.gigsSlice?.data);
    console.log("gigs fetched in Illustration services?:", data);
    const gigsAlone = data?.gigs;
    console.log("gigalone seen at Illustration services:", gigsAlone);

    function filterIllustrationGigs(gigsAlone) {
        const keywords = ['illustrate', 'illustration', '2d', '3d', 'art', 'story book', 'story-book', 'animation', 'character'];
        return gigsAlone?.filter(advertgig =>
            keywords.some(keyword => advertgig.title?.toLowerCase().includes(keyword))
        );
    }

    const illustrationGigs = filterIllustrationGigs(gigsAlone);

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
            <h1 className='aboutHeading'>Illustration.</h1>
            <div><h2 className='aboutHeading'>Bring Your Vision to Life with PrettyGigs Illustration Services!

</h2>

            <p className='aboutIntro'>
            At PrettyGigs, we know that captivating visuals are key to making a lasting impression. Our talented team of illustrators is dedicated to creating stunning, custom artwork that tells your story and elevates your brand.
            </p></div>
            

            <div className='left-column'>
                <h2> 🌟 Why Choose PrettyGigs for Your Illustration Needs?</h2>
                <p><em><strong>Custom Illustrations:</strong></em>  Unique designs tailored to your brand’s personality and message.</p>
                <p><em><strong>Brand Identity: </strong></em>  Develop a cohesive and memorable visual identity..</p>
                <p><em><strong> Marketing Materials:</strong></em>  Enhance your brochures, flyers, and advertisements with striking illustrations.</p>
                <p><em><strong>Digital Content:</strong></em>  Enrich your website, social media, and blogs with eye-catching visuals.</p>
                <p><em><strong>Infographics:</strong> </em>  Simplify complex information with clear and engaging infographics.</p>
                <p><em><strong>Product Illustrations: </strong> </em>  Showcase your products with detailed and attractive artwork.</p>
                <p><em><strong>Email Illustration Design: </strong> </em>  Let's create visually appealing emails that engage and convert.</p>
                 <div className='text-center' >
                 <img src='../public/img/prettygiglogo.svg' style={{width: "100%", maxHeight:"500px", objectFit: "contain"}}/>

                    <p>All designs are going to look pretty. You can be sure of that!</p>
                 </div>


            </div>

            <div className='right-column'>
                <h4>Illustrations come in a wide variety of types, each serving different purposes and suited to various contexts. </h4>
                <h2>Here are some common types of illustrations we undertake:</h2>
                <p><strong>Editorial Illustrations:</strong>  Used in magazines, newspapers, and online articles to complement written content and add visual interest.</p>
                <p><strong>Advertising Illustrations:</strong>  Created for promotional materials such as posters, flyers, and digital ads to attract attention and convey marketing messages.</p>
                <p><strong>Children's Book Illustrations: </strong> Colorful and engaging illustrations designed to captivate young readers and bring stories to life.</p>
                <p><strong>Medical Illustrations:</strong>  Detailed and accurate depictions of anatomical structures, medical procedures, and scientific concepts for educational and professional use.</p>
                <p><strong>Technical Illustrations:</strong>  Precise drawings used to explain complex machinery, processes, or systems, often found in manuals and instructional materials.</p>
                <p><strong>Fashion Illustrations:</strong>  Artistic representations of clothing and accessories, used by designers and in fashion magazines.</p>
                <p><strong>Concept Art: </strong> Preliminary illustrations used in the development of films, video games, and animations to visualize characters, environments, and scenes.</p>
                <p><strong>Infographics: </strong> Visual representations of data and information, combining illustrations, charts, and text to simplify complex topics.</p>
                <p><strong>Storyboard Illustrations:  </strong> Sequential drawings used to plan and visualize scenes in films, television shows, and advertisements.</p>
                <p><strong>Product Illustrations:  </strong> Detailed images used to showcase products, highlighting features and aesthetics, often used in marketing and e-commerce.</p>
                <p><strong>Character Design:  </strong> The creation of unique characters for animations, video games, comics, and branding.</p>
                <p><strong>Packaging Illustrations:</strong> Designs created for product packaging to attract customers and convey brand identity.</p>
                <p><strong>Architectural Illustrations: </strong> Artistic renderings of buildings and structures, used in architectural presentations and marketing materials.</p>

                <p><strong>Greeting Card Illustrations: </strong> Custom designs for greeting cards, including holidays, birthdays, and special occasions.</p>


            </div>

            <div className='left-column'>
            



                <h2> Don’t settle for ordinary.</h2>
                <p>Let PrettyGigs transform your Illustration into a powerhouse of growth and success.!</p>
                <p>📞 Contact us today to discover how we can amplify your brand’s voice and deliver exceptional results.
</p>
            </div>

            <div className='right-column'>
                <h3>Available Illustration Gigs:</h3>
                <p>Below are Illustration gigs you can order immediately if the description on any of them meets your
                    requirement. The jobs are delivered professionally by our in-house experts as promoted. You can also request a custom order by filling your requirement using our custom job posting option by going to contact page on this website.
                </p>
            </div>

            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4'>
                {loading && <div>Loading...</div>}
                {error && <div>Error: {error}</div>}
                {illustrationGigs?.length > 0 ? (
                    illustrationGigs.map((gigg) => (
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

export default Illustration;
