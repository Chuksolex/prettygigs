import { useEffect, useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import GigCard from "../../components/gigCard/GigCard";
import { Helmet } from 'react-helmet';
import SimpleSlider from '../../components/slider/HomeSlider';
import HomeCategory from '../../components/homeCategory/HomeCategory';
import AboutMarketPlace from '../../components/aboutMarketPlace/AboutMarketPlace';
import Testimonial from '../../components/testimonial/Testimonial';
import FAQ from '../../components/faq/FAQ';
import "./Home.scss";

const Home = () => {
  const data = useSelector(state => state.gigsSlice.data);
  console.log("gigs fetched in Home?:", data);

  const gigs = data?.gigs || [];
  console.log("gigs seen at Home:", gigs);

  // Create a copy of the array before sorting
  const sortedData = [...gigs].sort((a, b) => b.sales - a.sales);
  const top12BestSellers = sortedData.slice(0, 12);

  const { pathname } = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const [active, setActive] = useState(false);
  const isActive = () => { window.scrollY > 0 ? setActive(true) : setActive(false) };
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const encodeCategory = (categoryName) => {
    const encodedCategoryName = encodeURIComponent(categoryName);
    return `/gigs?cat=${encodedCategoryName}`;
  };

  const categories = [
    {
      name: 'Programming & Tech',
      subcategories: ['Web Design', 'Web Development', 'Software'],
    },
    {
      name: 'Digital Marketing',
      subcategories: ['Email Marketing', 'SEO Services', 'Social Media Marketing'],
    },
    {
      name: 'Advertising',
      subcategories: [],
    },
    {
      name: 'Business',
      subcategories: [],
    },
    {
      name: 'Writing & Translation',
      subcategories: [
        'Blog Posts & Articles',
        'Transcription',
        'Translation',
        'Technical Writing',
        'Academic & Research Writing',
        'Ghost-Writing',
      ],
    },
    {
      name: 'Graphics & Design',
      subcategories: [
        'Logo & Identity Branding',
        'Packaging & Labels',
        'Art & Illustration',
        'Visual Design',
        'Print Design',
      ],
    },
    {
      name: 'Music, Audio & Videos',
      subcategories: [
        'Voice-over',
        'Video Editing',
        '2-D Animations',
        '3-D Animations',
        'Explainer Videos',
      ],
    },
  ];

  return (
    <div>
      <Helmet>
        <title>Home - Prettygigs.com.NG</title>
        <meta name="description" content="Welcome to Prettygigs.com.NG, your one-stop solution for digital services like web development, data analytics, and graphic design." />
      </Helmet>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <nav className="popup-menu">
              <ul className="menu-items">
                {categories.map((category, index) => (
                  <li className="menu-item" key={index}>
                    <Link className="link menuLink" to={encodeCategory(category.name)}>
                      {category.name}
                    </Link>
                    <ul className="submenu">
                      {category.subcategories.map((subcategory, subIndex) => (
                        <li key={subIndex}>
                          <Link className="link" to={`/gigs?cat=${encodeURIComponent(subcategory)}`}>
                            {subcategory}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <hr />
        </>
      )}
      <SimpleSlider />
      <HomeCategory />
      <hr />
      <AboutMarketPlace />
      <div>
        <h3 style={{ color: "green" }}>Popular Services (Best Selling Gigs):</h3>
      </div>
      <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4'>
        {top12BestSellers.map((gigg) => (
          <div className="col" key={gigg?._id}>
            <GigCard currencyCode={data?.currencyCode} item={gigg} />
          </div>
        ))}
      </div>
      <div>
        <h3 style={{ color: "green" }}>What Our Clients Are Saying:</h3>
      </div>
      <div className='row'>
        <Testimonial />
      </div>
      <div className='faq'>
        <h3 style={{ color: "green" }}>Frequently Asked Questions</h3>
        <FAQ />
      </div>
    </div>
  );
};

export default Home;
