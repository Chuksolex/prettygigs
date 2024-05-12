 import "./Live_Tutor_Register.scss"
 
 
 const Live_Tutor_Register = () => {
    return(
        
        <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <form>
            <div className="form-group text-primary">
            <label >Parent or Guardian's Name</label>

              <input type="text" name="parent_name" className="form-control" id="exampleFormControlInput1" placeholder="Parent's Name"/>
            </div>

            <div className="form-group text-primary">
              <label> Child's Name</label>
              <input type="text" name="child_name" className="form-control" id="exampleFormControlInput1" placeholder="Child's Name" />
            </div>

            <div className="form-group text-primary">
              <label >Phone Number</label>
              <input type="number" name="phone" className="form-control" id="exampleFormControlInput1" placeholder="+234 12345678"/>
            </div>

            <div className="form-group text-primary">
              <label >Email address</label>
              <input type="email" name="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>

            <div className="form-group text-primary">
              <label >Prefared Time</label>
              <select className="form-control" value="" name="time" id="exampleFormControlSelect1">
                <option>--select time--</option>
                <option> Tuesday: 9am - 1pm</option>
                <option>Tues: 8pm - 11.45pmpm</option>
                <option>Saturday: 12pm - 4pm</option>
                <option>Another time will be better</option>

              </select>
            </div>

            <div className="form-group text-primary">
              
              <select className="form-control" value="" name="plan" id="exampleFormControlSelect1">
                <option>--select plan--</option>
                <option>Basic ₦ 30,000</option>
                <option>Standard ₦ 50,000</option>
                <option>Premium ₦ 90,000</option>
              </select>
            </div>
            <button type="submit" formAction="https://formspree.io/f/mqkrzldl" className="btn btn-submit btn-primary mt-3">
              Submit
            </button>
          </form>
        </div>
        <div className="col-md-4 sm-order-1" >
          <div className="jumbotron jumbotron-fluid mt-3 mb-3" style={{background: "#c6b7de", borderRadius:"10px"}}>
            <div className="container p-2">
              <h1 className="display-5 pb-4">Pay with Paystack</h1>
              <div className="text-center p-4">
                <a className="p-3 btn  mt-5" style={{background:"#fbb040"}} href="https://paystack.com/pay/devnaijaacademy">Paystack</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 sm-order-2" >
          <div className="jumbotron jumbotron-fluid mt-3" style={{background: "#c6b7de", borderRadius:"10px", color: "black"}}> 
            <div className="container p-4">
              <h1 className="display-4 overflow-hidden">Make Payment to</h1>
              <p className="lead">Account Name: Bemultimediahost LTD.</p>
              <p className="lead">
                <strong>Bank Name: UBA <br/>Acc no: 1025700612</strong>
              </p>
            
              <p>
                Send payment receipt to: <span><a style={{textDecoration:"none", color: "black"}} href="https://wa.me/+2348064762882">
                  +2348064762882  (Whatsapp)</a></span>
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    )
 }
 export default Live_Tutor_Register;