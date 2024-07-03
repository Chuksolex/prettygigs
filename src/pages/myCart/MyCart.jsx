import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem } from '../../reducers/cartSlice.js';
import { useNavigate } from 'react-router-dom';
import { toast} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import "./MyCart.css";
import ReactGA from  "react-ga4";

const MyCart = () => {
  ReactGA.send(
    {
      hitType: "pageview",
      page: '/mycart',
      title: "Cart"
    }
  );

  ReactGA.event({
    category: 'User Interaction',
    action: 'Clicked Call to Action Button',
    label: 'Cart',
  });
  
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cartSlice.cart); 

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;

    cart.forEach(item => {
      totalQuantity += item.quantity;
      totalPrice += item.totalPrice;
    });

    return { totalPrice, totalQuantity };
  };

  const goToCheckout = () => {
    if (!currentUser) {
      localStorage.setItem("intendedOrder", cart);

      toast.info('Login details are needed to process orders! You will be redirected to the login page in 3 seconds..', {
        position: "top-center",
        autoClose: 9000,
      });

      setTimeout(() => {
        navigate("/login");
      }, 9100);
      
      return;
    } else {
      navigate("/pay");
    }
  };

  return (        
    <div>
      
      {(!cart || cart.length === 0) ? (
        <div className="container h-100">
          <div className="row mb-4 mt-4 g-4">
            <div className="card col-sm-12 col-md-8 col-lg-8 bg-light">
              <div className="card col-8 col-md-8 mb-4 m_top2 chk-sty mx-wdt w-100 h-100">
                <div className="card-header text-start bg-light fs-1">
                  <i className="bi bi-cart3 color-danger h-1 fs-1" style={{color: "orange"}}></i>
                  My Cart
                </div>
                <div className="card-body text-center bg-light">
                  <i className="bi bi-cart4 fs-1 h-1" style={{color: "orange"}}></i>
                  <div className="card-title m-4 fs-4 text-center">Your cart is empty!</div>
                  <div className="card-text">
                   </div>
                  <button className="btn btn-warning fs-4 pd-4" onClick={()=> navigate("/gigs")}>Continue Shopping</button>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 ">
              <div className="modal show col-md-4 m_bot2 m_top2 mx-wdt w-100 " style={{ display: 'block', position: 'initial' }}>
                <div className="modal-dialog">
                  <div className="modal-content bg-light">
                    <div className="modal-header">
                      <h5 className="modal-title fs-2">Summary</h5>
                    </div>
                    <div className="modal-body">
                      <div className="row m0">
                        <div className="col-9 fl-lft pad0 m_bot1">
                          <h4 className="tol-fnt fw-500 fs-2 text-start"> Subtotal</h4>
                        </div>
                        <div className="col-3 fl-lft txt-rgt">
                          <h4 className="tol-fnt theme_color_txt fw-500 fs-3 text-start"><span className="total_amt fs-3 text-start">$0</span></h4>
                        </div>
                      </div>
                      <div className="m_bot3 m_top3 text-start">
                        <button className="btn btn-warning fs-5">Order Now</button>
                        <p className="chk-cen mt-4"> You won't be charged yet </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="containerr" style={{ position: "absolute", top: "0", left: "0", width: "100%", padding: "0px", backgroundColor: "white" }}>
            <form className="form-horizontal" method="POST" id="payment-form" role="form" action="http://digimat.marketpresso.com/paypal">
              <input type="hidden" name="_token" value="o1yggHjECtrsgQo8ju5USMbcMrLi0JDPZnq7gQjw" />
              {/* Form content */}
            </form>
          </div>
        </div>
      ) : (
        <div className="container">
          {/* Cart items */}
          <div className="row d-flex justify-content-center my-4 mx-wdt g-4">

            <div className="col-12 col-md-8 col-lg-8 mb-4   bg-secondary ">
              {cart?.map((item) => (
                <div key={item.id} className="row  align-items-center bg-light">
                  <div className="col-md-2">
                    <img src={item?.cover} className="w-100" alt={item.gigTitle} />
                  </div>
                  <div className="col-md-5">
                    <div className='d-flex '>
                      <p className="fs-4 text-left " style={{textAlign: "left"}}>
                        {item.gigTitle}
                      </p>
                      <button onClick={() => dispatch(removeItem(item))} type="button" className="btn" data-bs-toggle="tooltip" data-bs-original-title="true" title="Delte from Cart?">
                        <i className="bi bi-trash"></i>
                      </button>

                    </div>
                    
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="d-flex" >
                      <button className="btn btn-primary " onClick={() => dispatch(decrementQuantity(item))}>
                        <i className="bi bi-dash"></i>
                      </button>
                      <input 
                        className="form-control text-center mx-1 fs-4" 
                        value={item.quantity} 
                        defaultValue={1} 
                        min={0} 
                        type="number" 
                        style={{ width: "70px", height:"40px" }}
                      />
                      <button className="btn btn-primary" onClick={() => dispatch(incrementQuantity(item))}>
                        <i className="bi bi-plus"></i>
                      </button>
                    </div>
                  
                </div>
                <div className='col-md-2 col-6'>
                  <span className="fs-4">
                      <strong>{cart[0]?.currencyCode} {item?.totalPrice}</strong>
                    </span>
                </div>


                        
                </div>
        
              ))}
              
              <hr className="my-4" />
              <div className="text-center">
                <button className="btn btn-primary fs-3 pd-4 text-center" onClick={()=> navigate("/gigs")}>Continue Shopping?</button>
              </div>
           

              
    
            </div>
            <div className="col-12 col-md-4 col-lg-4">
              <div className="card mb-6 ml-4 w-100 bg-warning" style={{ height: "300px"}}>
                <div className="card-header bg-warning">
                  <h5 className="fs-2">Summary</h5>
                </div>
                <div className="card-body text-center bg-warning">
                  <ul className="">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0 fs-4 m-3">
                      Products
                      <span>$53.98</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0 fs-4 m-3">
                      Shipping
                      <span>Nil</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3 mr-3 fs-4 m-3">
                      <div>
                        <p className="mb-0 fs-5"><strong>Total amount</strong></p>
                        <strong>
                          <p className="mb-0 fs-5">(including VAT)</p>
                        </strong>
                      </div>
                      <span className="fs-4">
                      <strong>{cart[0]?.currencyCode} {Math.floor(getTotal().totalPrice)}</strong>

                      </span>
                    </li>
                  </ul>

                  <button className="btn btn-primary" style={{fontSize: "1.4rem", marginTop: "1rem"}} onClick={goToCheckout}>
                    Go to checkout
                  </button>
                </div>
              </div>
            </div>





          </div>
          
        </div>
        
      )}
    </div>
  );
};

export default MyCart;
