import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Footer.css"

function Footer() {
  const navigate = useNavigate();

return (
    <div className="container footerall">
<footer className="py-5">
    <div className="row">
      <div className="col-6 col-md-2 mb-3">
        <h5>Company</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Home: Prettygigs</a></li>
          <li className="nav-item mb-2"><a href="/contact" className="nav-link p-0 text-muted">Contact</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
          <li className="nav-item mb-2"><a href="/about" className="nav-link p-0 text-muted">About</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5>Services</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="/live-tutor" className="nav-link p-0 text-muted">Coding-Tutorials</a></li>
          <li className="nav-item mb-2"><a href="/gigs" className="nav-link p-0 text-muted">General Gigs or Services</a></li>
          <li className="nav-item mb-2"><a href="/#software" className="nav-link p-0 text-muted">Software Development</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Graphic Design</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Data Analysis</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5>Legal</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Privacy Policy</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Terms and Conditions</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
          
          
        </ul>
      </div>

      <div className="col-md-5 offset-md-1 mb-3">
      <div className="row justify-content-center">
      <div className="col-md-10">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-center">Subscribe to our Newsletter</h5>
            <form>
              <div className="form-group">
                
                <input type="email" className="form-control" id="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
               
                <input type="text" className="form-control" id="name" placeholder="Your name" required />
              </div>
              <button type="submit" className="btn btn-primary btn-block ">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top footerlast">
      <p>© 2024 Prettygigs.com.ng by Bemultimediahost Ltd. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
      </ul>
    </div>
  </footer>
  </div>
  )
  }
  export default Footer;
