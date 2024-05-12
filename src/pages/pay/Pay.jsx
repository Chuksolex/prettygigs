

import React, {useState} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import "./Pay.css";
import {  incrementQuantity, decrementQuantity, removeItem } from '../../reducers/cartSlice.js';
 import newRequest from '../../utils/newRequest';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Pay = () => {
 
  const dispatch = useDispatch();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const navigate = useNavigate();
   const cartItems = useSelector((state) => state.cartSlice.cart); // Replace "cart" with your actual reducer slice name
   const totalPrice = useSelector((state) => state.cartSlice.totalPrice);
  console.log("cart in pay page and totalPrice:", cartItems, totalPrice);

  const calculateTotalDiscount = () => {
    let totalDiscount = 0;   
  
    cartItems.forEach((item) => {
      const discountOffer = item.discountOffer;
      const discountStartDate = item.discountStartDate;
      const discountValidThrough = item.discountValidThrough;
  
      const currentDate = new Date();
      const startDate = new Date(discountStartDate);
      const endDate = new Date(discountValidThrough);
      console.log("enddate", endDate, "startdate", startDate);
  
      if (currentDate >= startDate && currentDate <= endDate) {
        // Discount is valid, calculate and accumulate 
        const discountAmount = (discountOffer / 100) * parseFloat(item.baseAmount);
        console.log("discount amount at calculate", discountAmount, );
        totalDiscount += discountAmount;
      }
    });
  
    return totalDiscount;
  };
  
  

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    const totalDiscount = calculateTotalDiscount();
    console.log("totalDiscount calculated", totalDiscount);

  
    cartItems.forEach(item => {
      totalQuantity += item.quantity; // Accumulate each item's quantity
      console.log("totalQuantity in pay page", totalQuantity);

    
  
      totalPrice += parseFloat(item.totalPrice); // Accumulate the total price for each item
    });
  
    return { totalPrice, totalQuantity, totalDiscount };
  };

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };
  
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handlePayment = () =>{
    if (!selectedPaymentMethod) {
      // Focus on the customRadio element
      const customRadio = document.getElementById('customRadio');
      if (customRadio) {
        customRadio.focus();
      }
      return; // Exit the function without proceeding to payment
    }
    setLoading(true)
    const requestData = {
      cartItems: cartItems,
      totalQuantity: getTotal().totalQuantity,
      overallTotalPrice:  Math.floor(getTotal().totalPrice - getTotal().totalDiscount),
      currentUser
    };
  
    newRequest
  .post('/orders/create-payment-intent', requestData) // moved this to Package page
  .then((response) => {
    setLoading(false);
    //console.log("Response:", response);
    console.log("response.data.data.link", response.data.data.link);
    console.log(response.data.status);



    if (response.data.status === "success") {
      console.log(response)
      const link = response.data.data.link;
     window.location.href=link ;// This will redirect to the payment link
    } else {
      console.log("Order creation failed:", response.message);
      // Show a toast with an error message
      toast.error(response.message);
    }
  })
  .catch((error) => {
    setLoading(false);
    console.error("Error creating order:", error.response.data);
    setError(error.response.data);
    toast.error("Payment failed:", error.response.data);
  });


  }
  
  

   
      return (
      




        
       <div>     
         
                
           
       <div className="container">
         
       <div className="row justify-content-center my-4 mx-wdt">
  <div className="col-sm-12 col-md-8 col-lg-8">
    <div className="card mb-6 ml-4 mt-4 w-100 h-100" style={{borderRadius: "10px", maxHeight: "150px"}}>
      <div className="card-header py-4 text-start fs-1 d-flex">
      <i className="bi bi-credit-card ml-4" style={{fontSize: "1.5rem", color: "#e36b09"}}></i>

        <h5 className="mb-0 ms-4 fs-2">Select Any Available Payment Option</h5>
      </div>
      <div className="card-body">
        <div className="col-12 col-md-12 chk-bor pay-pad pay-radio b-r-b-5">
          <div className="row">
            <div className="col-md-6 m-b-10">
              <div className="div-cust-radio">
                <div className="custom-control custom-radio p-l-0">
                  <label className="custom-control-label" for="customRadio">
                    <input type="radio" className="custom-control-input" id="customRadio" name="example1" />
                    <img className="ms-5" title="Flutterwave" src="/img/flutterwave.png" alt="flutterwave logo" style={{maxWidth:"200px"}} />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="m_top2 txt-right" id="proceed_buttontest" style={{display:"none"}}>
            <button type="submit" className="btn btn-primary btn-lg">Proceed</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="col-sm-12 col-md-4 col-lg-4">
    <div className="card mb-6 ml-4 mt-4 w-100" style={{background: "#F4E2DE", height: "300px"}}>
      <div className="card-header">
        <h5 className="fs-2">Summary</h5>
      </div>
      <div className="card-body text-center">
        <ul className="">
          <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0 fs-4 m-3">
          Subtotal ({cartItems.length + " Items"})
            <span>${getTotal().totalPrice}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center px-0 fs-4 m-3">
            Shipping
            <span>N/A</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center px-0 fs-4 m-3">
            Total Discount on Base Price:
            <span>{cartItems[0]?.currencyCode} {getTotal().totalDiscount}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3 mr-3 fs-4 m-3">
            <div>
              <p className="mb-0 fs-2"><strong>Total amount</strong></p>
              <strong>
                <p className="mb-0 fs-5">(including VAT)</p>
              </strong>
            </div>
            <span className="fs-2 fw-bold">
            <strong>{cartItems[0]?.currencyCode} {Math.floor(getTotal().totalPrice - getTotal().totalDiscount)}</strong>
            </span>
          </li>
        </ul>
        <button type="button" className="btn btn-primary btn-lg btn-block fs-2 p-2 mt-4 mr-4 ms-4" onClick="handlePayment()" disabled={!selectedPaymentMethod}>Pay Now</button>
        {error && <p className="text-danger">{error}</p>}
      </div>
    </div>
    <div className="col-12 col-md-12 mt-4 text-center">
      <img src="http://digimart.marketpresso.com/images/template/1/payment.png" />
      <p className="align-center"><span className="str-col theme_color_txt"><i className="fa fa-lock theme_color_txt" aria-hidden="true"></i> SSL </span> SECURED PAYMENT </p>
      <p className="fs-5 align-center">Your information is protected by 256-bit SSL encryption</p>
    </div>
  </div>
</div>

      </div>

    

</div>


      )
    } 
     
 export default Pay;



    

