import{useEffect, useState} from 'react';
import { useNavigate, Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import {useQuery} from "@tanstack/react-query";
import { useSelector } from 'react-redux';
import GigCard from "../../components/gigCard/GigCard";

 import "./Services.scss";
import SimpleSlider from '../../components/slider/HomeSlider';
import HomeCategory from '../../components/homeCategory/HomeCategory';
import AboutMarketPlace from '../../components/aboutMarketPlace/AboutMarketPlace';
import Testimonial from '../../components/testimonial/Testimonial';

 import FAQ from '../../components/faq/FAQ';



const Services = () => {
  // const [popularGigs, setPopularGigs] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
 

  const data = useSelector(state => state.gigsSlice.data);
  console.log("gigs fetched in Home?:", data);
  const gigsAlone = data?.gigs;
  console.log("gigalone seen at Home:", gigsAlone);

  const sortedData = [...gigsAlone].sort((a, b) => {

       return (b.sales - a.sales)
    
    
      
    
  });





  
const {pathname} = useLocation();

useEffect(() => {
  window.addEventListener("scroll", isActive)

  return () => {
    window.removeEventListener("scroll", isActive)
  }
}, []);

  const [active, setActive] = useState(false);
const isActive = () => { window.scrollY >0 ? setActive(true) : setActive(false)}
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
                 <HomeCategory />

    </div>
 
   
      
  )
}

export default Services;