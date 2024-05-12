import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem } from '../../reducers/cartSlice.js';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./MyCart.css";

const MyCart = () => {
  const dispatch = useDispatch();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
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
        position: toast.POSITION.TOP_CENTER,
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
          <div className="row mb-4 mt-4">
            <div className="col-sm-12 col-md-8 col-lg-8">
              <div className="card col-8 col-md-8 mb-4 m_top2 chk-sty mx-wdt w-100 h-100">
                <div className="card-header text-start fs-1">
                  <i className="bi bi-cart3 color-danger h6"></i>
                  My Cart
                </div>
                <div className="card-body text-center">
                  <i className="bi bi-cart4 color-danger fs-2"></i>
                  <div className="card-title m-4 fs-2">Your cart is empty!</div>
                  <div className="card-text">
                    Looks like you have no items in your shopping cart
                  </div>
                  <button className="btn btn-primary fs-3 pd-4" onClick={()=> navigate("/gigs")}>Continue Shopping</button>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="modal show col-md-4 m_bot2 m_top2 mx-wdt w-100" style={{ display: 'block', position: 'initial' }}>
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title fs-1">Summary</h5>
                    </div>
                    <div className="modal-body">
                      <div className="row m0">
                        <div className="col-9 fl-lft pad0 m_bot1">
                          <h4 className="tol-fnt fw-500 fs-2"> Subtotal</h4>
                        </div>
                        <div className="col-3 fl-lft txt-rgt">
                          <h4 className="tol-fnt theme_color_txt fw-500 fs-3"><span className="total_amt fs-3">$0</span></h4>
                        </div>
                      </div>
                      <div className="m_bot3 m_top3 text-center">
                        <button className="btn btn-primary fs-3">Order Now</button>
                        <p className="chk-cen m_bot1"> You won't be charged yet </p>
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
          {cart?.map((item) => (
  <div key={item.id} className="row">
    <div className="col-md-3">
      <img src={item?.cover} className="w-100" alt={item.gigTitle} />
    </div>
    <div className="col-md-6">
      <p className="fs-1">
        <strong>{item.gigTitle}</strong>
      </p>
      <button onClick={() => dispatch(removeItem(item))} type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-original-title="true" title="Delte from Cart?">
        <i className="bi bi-trash"></i>
      </button>
    </div>
    <div className="col-md-3">
      <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
        <button className="btn btn-primary px-3 me-2 fs-2" onClick={() => dispatch(decrementQuantity(item))}>
          <i className="bi bi-dash"></i>
        </button>
        <input value={item.quantity} defaultValue={1} min={0} type="number" />
        <button className="btn btn-primary px-3 ms-2 fs-2" onClick={() => dispatch(incrementQuantity(item))}>
          <i className="bi bi-plus"></i>
        </button>
      </div>
      <p className="fs-2">
        <strong>{cart[0]?.currencyCode} {item?.totalPrice}</strong>
      </p>
    </div>
  </div>
))}
<hr className="my-4" />
<div className="text-center">
  <button className="btn btn-primary fs-3 pd-4 text-center" onClick={()=> navigate("/gigs")}>Continue Shopping?</button>
</div>

        </div>
      )}
    </div>
  );
};

export default MyCart;
