
// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../reducers/authSlice';
import newRequest from '../../utils/newRequest';
import './Navbar.css';
import CurrencySwitch from '../currencySwitch/CurrencySwitch';

function Navbar() {
  const dispatch = useDispatch();
  const { currentUser, isLoggedIn } = useSelector((state) => state.auth);
  const cartCount = useSelector((state) => state.cartSlice.cartCount);

  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await newRequest.post('auth/logout');
      localStorage.removeItem('currentUser');
      dispatch(logout());
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const handleLinkClick = () => {
    const navbarToggler = document.getElementById('navbarTogglerDemo03');
    if (navbarToggler.classList.contains('show')) {
      $(navbarToggler).collapse('hide'); // Use jQuery to collapse the navbar
    }
  };

  
  return (
    <nav className=" navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to={"/"} onClick={handleLinkClick}>
          <img src="/img/logo.png" 
               width="60" height="100" 
               alt="Prettygigs Logo" /> 
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/gigs"} onClick={handleLinkClick}>
                Gigs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/about"} onClick={handleLinkClick}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/services"} onClick={handleLinkClick}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/blog"} onClick={handleLinkClick}>
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/contact"} onClick={handleLinkClick}>
                Contact Us
              </Link>
            </li>
           

           
            {/* <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to={"/portfolio"} id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Portfolio
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" to="/portfolio">GENERAL WORK PORTFOLIO</Link>
                <Link className="dropdown-item" disabled to={"#"}>OFFICE & BUSINESS BUILDINGS</Link>
                <Link className="dropdown-item" to={"#"}>HOTELS</Link>
                <Link className="dropdown-item" to={"#"}>COMMERCIAL & ENTERTAINMENT CENTERS</Link>
                <Link className="dropdown-item" to={"#"}>HOSPITALS</Link>
                <Link className="dropdown-item" to={"#"}>OTHER PROJECTS</Link>
              </div>
            </li> */}
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to={"/portfolio"} id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={handleLinkClick}>
                Hire (Find Talents)
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" to="/gigs" onClick={handleLinkClick}>Hire From Available Gigs</Link>
                <Link className="dropdown-item" to={"/project-request"} onClick={handleLinkClick}>Post Custom Job</Link>
                <Link className="dropdown-item" to={"/contact"} onClick={handleLinkClick}>Outsource</Link>
                <Link className="dropdown-item" to={"/live-tutor"} onClick={handleLinkClick}>Coaching(Learn) From Live-Tutor</Link>

              
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/live-tutor"} onClick={handleLinkClick}>
                Live-Tutor
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav align-items-center mb-2 mb-lg-0"> {/* Align to the center vertically */}
          <li className="nav-item">
              <Link className="nav-link active position-relative" aria-current="page" to="/mycart" onClick={handleLinkClick}>
                <i className="bi bi-cart4 color-success fs-3"></i>
                {cartCount > 0 && ( 
                      <span className="position-absolute top-2 start-100 translate-middle badge rounded-pill bg-danger fs-7 pd-1">
                        {cartCount}
                        <span className="visually-hidden">Checkout</span>
                      </span>
                     )} 
                 

                
              </Link>
            </li>
            <li className="nav-item">
              <CurrencySwitch />
            </li>
                     
          </ul>

         {/* User section */}
         <ul className="navbar-nav align-items-center mb-2 mb-lg-0">
            {isLoggedIn ? (
              <li className="nav-item">
                <div className="user" onClick={() => setOpen(!open)}>
                  <img src={currentUser?.img || "/img/noavatar.jpg"} alt=''/>
                  <span>{currentUser?.userName}</span>
                  {open && (
                    <div className="options">
                      {currentUser?.isSeller && (
                        <>
                          <Link className="link" to="/mygigs" onClick={handleLinkClick}>My Gigs</Link>
                          <Link className='link' to="/Add" onClick={handleLinkClick}>Add New Gig</Link>
                          <Link className='link' to="/create-blog">Add Blog Post</Link>
                        </>
                      )}
                      <Link className="link" to="/orders" onClick={handleLinkClick}>Orders</Link>
                      <Link className="link" to="/Messages" onClick={handleLinkClick}>Messages</Link>
                      <Link className="link" onClick={handleLogout}>Logout</Link>
                    </div>
                  )}
                </div>
              </li>
            ) : (
              <li className="nav-item">
                <div className='user'>
                  <span><Link to="/login" className="link" onClick={handleLinkClick}>Login</Link></span>
                  <span><Link className="link join" to="/register" onClick={handleLinkClick}>Join</Link></span>
                </div>
              </li>
            )}
          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
