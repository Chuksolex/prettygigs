import React, { useState } from 'react';
//import { Modal, Button, Form } from 'react-bootstrap';
import newRequest from '../../utils/newRequest'; // Import your API request function
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DiscountModal({ isOpen, closeModal }) {
  const [discountType, setDiscountType] = useState('None');
  const [startDate, setStartDate] = useState('');
  const [validThrough, setValidThrough] = useState('');
  const [error, setError] = useState(null);

  const handleSave = async () => {
    // Convert start date and valid through date strings to Date objects
    
    try {
    const startDateObj = new Date(startDate);
    const validThroughObj = new Date(validThrough);

    // Check if the start date is before the valid through date
    if (startDateObj >= validThroughObj) {
      setError("Start date must be before valid Through date.");
      return;
    }

      // Send the discount configuration data to the backend
      await newRequest.post('/gigs/configure-discounts', {
        discountType,
        startDate: startDateObj,
        validThrough: validThroughObj,
      });

      toast.success(`Successfully activated ${discountType}`, {
        position: toast.POSITION.TOP_RIGHT // Customize the position of the toast
      });

      // You can handle success here, e.g., show a success message
      console.log('Discount configuration saved successfully');
      closeModal();
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error('Error saving discount configuration:', error);
      setError(error);
    }
  };

  return (
    <div className="modal" tabIndex="-1" role="dialog" style="display: {{isOpen ? 'block' : 'none'}};">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Configure Discount</h5>
        <button type="button" className="btn-close" aria-label="Close" onclick="closeModal()"></button>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label  className="form-label">Select Discount Type</label>
            <select className="form-select" id="discountType" onchange="setDiscountType(this.value)">
              <option value="None">None</option>
              <option value="Black Friday">Black Friday</option>
              <option value="Deal of the Week">Deal of the Week</option>
              <option value="Flash Sale">Flash Sale</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Start Date</label>
            <input type="date" className="form-control" id="startDate" onchange="setStartDate(this.value)" />
          </div>
          <div className="mb-3">
            <label  className="form-label">Valid Through</label>
            <input type="date" className="form-control" id="validThrough" onchange="setValidThrough(this.value)" />
          </div>
          <div className="error-text">{{error}}</div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" onclick="closeModal()">Close</button>
        <button type="button" className="btn btn-primary" onclick="handleSave()">Save</button>
      </div>
    </div>
  </div>
</div>

  );
}

export default DiscountModal;
