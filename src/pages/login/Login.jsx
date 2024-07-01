// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import newRequest from '../../utils/newRequest';
import { login } from '../../reducers/authSlice';
import './Login.scss';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const data = { email, password };
      const res = await newRequest.post('/auth/login', data);


      if (res.data.isVerified === true) {
        const currentUser = res.data;

        const token = res.headers['set-cookie']?.find(cookie => cookie.startsWith('accessToken'))?.split('=')[1];

        // Dispatch login action with user and token
        dispatch(login({ currentUser, token }));

        const intendedOrder = localStorage.getItem('intendedOrder');
        const wantedGigInfo = JSON.parse(localStorage.getItem('wantedGigInfo'));

        setLoading(false);
        wantedGigInfo ? navigate(`/gig/${wantedGigInfo._id}`) : intendedOrder ? navigate('/mycart') : navigate('/');
        localStorage.removeItem('intendedOrder');
        localStorage.removeItem('wantedGigInfo');
      } else {
        setLoading(false);
        navigate('/checkinbox');
      }
    } catch (err) {
      setError(err.response.data);
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="">Email</label>
        <input
          name="email"
          type="text"
          placeholder="example@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="">Password</label>
        <input
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className='fs-4'>{loading ? 'Trying login...' : 'Login'}</button>
        <div>
        <p> {error && error}</p>
          <Link to="/forgot-password">Forgot Password?</Link>
          
        </div>
        <div>
          <Link style={{ textDecoration: 'none', linkStyle: 'none', }} to="/register">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
