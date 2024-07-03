import { useState, useEffect } from "react";
import upload from "../../utils/upload.js";
import "./Register.scss";
import newRequest from "../../utils/newRequest.js";
import { useNavigate, Link } from "react-router-dom";
import ReactGA from "react-ga4";

function Register() {
  ReactGA.send(
    {
      hitType: "pageview",
      page: '/register',
      title: "Register"
    }
  );

  ReactGA.event({
    category: 'User Interaction',
    action: 'Clicked Call to Action Button',
    label: 'Register',
  });
  
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    phone: "",
    isSeller: false,
    desc: "",
    token: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const url = await upload(file);
    try {
      const response = await newRequest.post("/auth/register", {
        ...user,
        img: url,
      });

      // Check if the registration was successful
      if (response.status === 201) {
        // Redirect to the email verification page
        navigate("/checkinbox", { replace: true });
      }
    } catch (err) {
      console.log(err);
      if (err.response && err.response.data) {
        setError(err.response.data);
      } else {
        setError("An error occurred during registration.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Create a new account</h1>
          <label htmlFor="">Username</label>
          <input
            name="username"
            type="text"
            placeholder="johndoe"
            onChange={handleChange}
          />
          <label htmlFor="">Email</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            onChange={handleChange}
          />
          <label htmlFor="">Phone</label>
          <input
            name="phone"
            type="number"
            placeholder="Phone"
            onChange={handleChange}
          />
          <label htmlFor="">Password</label>
          <input name="password" type="password" onChange={handleChange} />
          <label htmlFor="">Profile Picture</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          <label htmlFor="">Country</label>
          <input
            name="country"
            type="text"
            placeholder="Usa"
            onChange={handleChange}
          />
          <button type="submit" disabled={loading}>
            {loading ? (
              <span
                className="spinner-border spinner-border-sm"
                role="status"                
              ></span>
            ) : (
              "Register"
            )}
          </button>
          {error && <div className="text-danger">{error}</div>}
          <span className="log-in">
            Already a user?
            <Link to="/login">
              <span>Login</span>{" "}
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Register;
