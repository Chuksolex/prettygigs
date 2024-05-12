import axios from "axios";

  //baseURL: "https://phaxnetgigs.onrender.com/api", http://localhost:8800/api


const newRequest = axios.create({
  baseURL: "https://phaxnetgigs.onrender.com/api", 
  withCredentials: true,
});

export default newRequest;
