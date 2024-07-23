 import { useSelector } from "react-redux";
import "./Live_Tutor_Register.css";
import ReactGA from "react-ga4";
import { useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Terms from "../terms/Terms";


export const Modal = ({ show, handleClose, children }) => {
  return (
    <div className={`modal ${show ? 'show' : ''}`} onClick={handleClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">Terms and Conditions</h4>
          <button className="close" onClick={handleClose}>&times;</button>
        </div>
        <div className="modal-body">
          {children}
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={handleClose}>Close</button>
        </div>
      </div>
    </div>
  );
};


 
 
 const Live_Tutor_Register = () => {
const [formData, setFormData] = useState({
  parent_name: "",
  child_name: "",
  phone: "",
  email: "",
  prefered_time: "",
  plan: "",
});

 const [message, setMessage] = useState("");
 const [sending, setSending] = useState(false);
 const [termsAccepted, setTermsAccepted] = useState(false);
 const [showModal, setShowModal] = useState(false);



 const handleChange = (e) => {
  const {name, value} = e.target;
  setFormData({
    ...formData, [name]: value
  })
 }
 
 const handleSubmit = async (e) => {
  e.preventDefault();
  setSending(true)
  try {
    const response = await axios.post('https://phaxnetgigs.onrender.com/api/livetutor-register', formData);
    setSending(false)

    setMessage(response.data || "Successful registration. Complete registration by making payment.");
    
  } catch (error) {
    setSending(false);
    setMessage(error.response || "Something went wrong try again or contact us.");
  }
 }
  ReactGA.send(
    {
      hitType: "pageview",
      page: '/live-tutor-register',
      title: "LiveTutorRegister"
    }
  );

  ReactGA.event({
    category: 'User Interaction',
    action: 'Clicked Call to Action Button',
    label: 'LiveTutorRegister',
  });
  
  const selectedCurrency =useSelector((state) => state.currencySlice.selectedCurrency);
  console.log(`selectedCurrency at Tutor Register: ${selectedCurrency}`);

  const handleCheckboxChange = () => {
    setTermsAccepted(!termsAccepted);
  };

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };
    return(
        
        <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 jumbotron jumbotron-fluid mt-3 mb-3" style={{background: "lightgray", borderRadius:"10px"}}>
          <form onSubmit={handleSubmit} >
            <div className="form-group text-primary">
            <label >Parent or Guardian's Name</label>

              <input onChange={handleChange}  type="text" name="parent_name" value={formData.parent_name} className="form-control" id="exampleFormControlInput1" placeholder="Parent's Name"/>
            </div>

            <div className="form-group text-primary">
              <label> Child's Name</label>
              <input onChange={handleChange} type="text" name="child_name" value={formData.child_name} className="form-control" id="exampleFormControlInput1" placeholder="Child's Name" />
            </div>

            <div className="form-group text-primary">
              <label >Phone Number</label>
              <input onChange={handleChange} type="number" name="phone" value={formData.phone} className="form-control" id="exampleFormControlInput1" placeholder="+234 12345678"/>
            </div>

            <div className="form-group text-primary">
              <label >Email address</label>
              <input onChange={handleChange} type="email" name="email" value={formData.email} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>

            <div className="form-group  text-primary mb-4">
              <label >Prefared Time</label>
              <select onChange={handleChange} className="form-control" value={formData.prefered_time} name="prefered_time" id="exampleFormControlSelect1">
                <option>--select time--</option>
                <option> Tuesday: 10am - 1pm</option>
                <option>Tues: 8pm - 11pm</option>
                <option>Saturday: 10am - 1pm</option>
                <option>Another time will be better</option>

              </select>
            </div>

            <div className="form-group text-primary mb-4 mb-4">
              
              <select className="form-control"  name="plan" value={formData.plan} id="exampleFormControlSelect1" onChange={handleChange}>
                <option>--select plan--</option>
                <option value="Basic ₦ 115,000">Basic ₦ 115,000</option>
                <option value="Standard ₦ 144,000">Standard ₦ 144,000</option>
                <option value="Premium ₦ 180,000">Premium ₦ 180,000</option>
              </select>
            </div>

            <div className="form-group text-primary mb-4">
              <input size={8} type="checkbox" id="terms" onChange={handleCheckboxChange} />
              <label htmlFor="terms" className="fs-6">
                I accept <span onClick={handleModalToggle} style={{ color: "#8567B8", cursor: "pointer", textDecoration: "underline", fontSize: "16px" }}> terms.</span>
              </label>            </div>
            <button type="submit" className="btn btn-submit btn-warning w-50 mt-1 mb-4"  disabled={!termsAccepted}>{sending ? "Sending..." : "Submit"}
              
            </button>

            {message && <p className="m-4">{message}</p>}
          </form>
        </div>
        <div className="col-md-4 sm-order-1" >
          <div className="jumbotron jumbotron-fluid mt-3 mb-3" style={{background: "lightgray", borderRadius:"10px"}}>
            <div className="container p-2">
              <h1 className="display-5 pb-4">Pay with Paystack</h1>
              <div className="text-center p-4">
                <a className="p-3 btn  mt-5" style={{background:"#fbb040"}} href="https://paystack.com/pay/livetutor" target="_blank" rel="noopener noreferrer">Paystack</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 sm-order-2" >
          <div className="jumbotron jumbotron-fluid mt-3" style={{background: "lightgray", borderRadius:"10px", color: "white"}}> 
            <div className="container p-4">
              <h1 className="display-4 overflow-hidden">Make Payment to</h1>
              <p className="lead">Account Name: Bemultimediahost LTD.</p>
              <p className="lead">
                <strong>Bank Name: UBA <br/>Acc no: 1025700612</strong>
              </p>
            
              <p>
                Send payment receipt to: <span><a className="btn btn-warning " style={{textDecoration:"none", color: "black"}} href="https://wa.me/+2348064762882">
                  +2348064762882  (Whatsapp)</a></span>
                
              </p>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} handleClose={handleModalToggle}>
        <Terms />
      </Modal>
    </div>
    
    )
 }
 export default Live_Tutor_Register;