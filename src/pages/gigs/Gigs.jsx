import React, { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import "./Gigs.scss";
import GigCard from "../../components/gigCard/GigCard";
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';
import { useLocation } from 'react-router-dom';
import DiscountModal from '../../components/discountModal/DiscountModal';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from 'react-helmet';



const Gigs = () => {
  const data = useSelector(state => state.gigsSlice.data);
  const [filteredSearch, setFilteredSearch] = useState(undefined);
  console.log("data frm gig:", data);
  const gigsAlone = Array(data?.gigs);
  console.log("gigalone:", gigsAlone);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("search"); // Retrieve the search term from the URL
  const initialCategoryFilter = searchParams.get("cat"); // retrieve cat from url

  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(10000);
  const minRef = useRef();
  const maxRef = useRef();
  const [catFilter, setCatFilter] = useState(initialCategoryFilter); //category is cat
  const [discountModalIsOpen, setDiscountModalIsOpen] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleCatChange = (e) => {
    setCatFilter(e.target.value);
  };

  const handleMinChange = (e) => {
    const value = parseFloat(e.target.value);

    if (isNaN(value) || value < 0) {
      setMin(0);
    } else {
      setMin(value);
    }
  };

  const handleMaxChange = (e) => {
    const value = e.target.value;
    setMax(value);
  };

  const filteredData = gigsAlone?.filter((gig) => {
    const gigTitle = gig?.title.toLowerCase();
    const priceCondition = !isNaN(gig?.price_basic) >= (min) && !isNaN(gig?.price_basic) <= (max);
    const searchTermCondition = !searchTerm || gigTitle.includes(searchTerm.toLowerCase());
    const categoryCondition = !catFilter || gig?.cat.toLowerCase() === catFilter.toLowerCase();

    return priceCondition && searchTermCondition && categoryCondition;
  });

  console.log("filteredData:", filteredData);

  const handleFilter = () => {
    if (filteredData) setFilteredSearch(filteredData);
  };

  const handleSortChange = (newSort) => {
    setSort(newSort);
    setOpen(false);
  };

  const sortedData = [...filteredData].sort((a, b) => {
    if (sort === "sales") {
      return b.sales - a.sales;
    } else {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }
  });

  const openDiscountModal = () => {
    setDiscountModalIsOpen(true);
  };

  const closeDiscountModal = () => {
    setDiscountModalIsOpen(false);
  };

  return (
    <div className='gigs'>
      <div className="containerr">
        {/* <span className="breadcrumbs"> PHAXNETGIGS › GRAPHICS & DESGIN › </span> */}
        <Helmet>
        <title>Gigs</title>
        <meta name="description" content="Available gigs and services to shop from." />
      </Helmet>
        <h1 className='gigHeading'>Available Gigs</h1>
        {currentUser?.isSeller &&
          <>
            <svg onClick={openDiscountModal} xmlns="http://www.w3.org/2000/svg"
              width="24" height="24" fill="#e36b09" className="bi bi bi-gear" viewBox="0 0 16 16">
              <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
              <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
            </svg>
            <DiscountModal
              isOpen={discountModalIsOpen}
              closeModal={closeDiscountModal}
            />
          </>
        }

        <p className='gigPara'> Browse the wonders of art and design with Prettygigs.</p>
        <hr className='hr'/>
        <div className="menu-container">
          
          <div className="menu mr-4">
            <div className="left">
              <span className='budget'>Budget</span>
              <input value={min} onChange={handleMinChange} ref={minRef} type="number" name='min' placeholder="min" />
              <input value={max} onChange={handleMaxChange} ref={maxRef} type="number" name='max' placeholder="max" />
              <button onClick={handleFilter}>Apply</button>
            </div>

          <div className='center'>
            <select
              className="form-select form-select-md mb-md-0 w-auto"
              value={catFilter}
              onChange={handleCatChange}
              name="cat"
            >
  

              <option value="">Search by Category</option>
              <option value="Graphics & Design">Graphics & Design</option>
              <option value="Web Development">Web Development</option>
              <option value="Web Design">Web Design</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Programming & Tech">Programming & Tech</option>
              <option value="Business">Business</option>
              <option value="Email Marketing">Email Marketing</option>
              <option value="SEO Services">SEO Services</option>
              <option value="Social Media Marketing">Social Media Marketing</option>
              <option value="Writing & Translation">Writing & Translation     </option>
              <option value="Translation"> Translation</option>
              <option value="Music, Audio & Videos">Music, Audio & Videos</option>
              <option value="Art & Illustration">Art & Illustration</option>
              <option value="Logo & Identity Branding">Logo & Identity Branding</option>
              <option value="Voice-over"> Voice-over</option>
              <option value="Video Editing"> Video Editing</option>
              <option value="2-D Animations"> 2-D Animations</option>
              <option value="3-D Animations"> 3-D Animations</option>
              <option value="Explainer Videos"> Explainer Videos</option>
            </select>
          </div>  

        <div className="right">
          <span className='sortBy'>SortBy:</span>
          <span className='sortType'> {sort === "sales" ? "Best Selling" : "Newest"}</span>
          
          <i className="bi bi-chevron-down"  onClick={() => setOpen(!open)}  />
          {open && (
            <div className="rightmenu">
              {sort === "sales" ? (
                <span onClick={() => handleSortChange("createdAt")}>Newest</span>
              ) : (
                <span onClick={() => handleSortChange("sales")}>Best Selling</span>
              )}
            </div>)}
        </div>
      </div>
      
      </div>

      <hr className='hr' />

        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4'>
            {sortedData.map((gigg) => (
              <div className="col" key={gigg?._id}>
                <GigCard currencyCode={data?.currencyCode} item={gigg} />
              </div>
            ))}
         

        </div>
      </div>
    </div>
  );
}

export default Gigs;
