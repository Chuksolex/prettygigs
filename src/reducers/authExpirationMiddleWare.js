// src/middleware/checkTokenExpiration.js
import { logout } from '../reducers/authSlice';
import {jwtDecode} from 'jwt-decode';

const checkTokenExpirationMiddleware = ({ dispatch, getState }) => next => action => {
  const { auth } = getState();
  const token = auth.token;

  if (token) {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    if (decodedToken.exp < currentTime) {
      dispatch(logout());
    }
  }

  return next(action);
};

export default checkTokenExpirationMiddleware;
