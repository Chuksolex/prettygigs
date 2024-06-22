import React from 'react';
import { Link, useParams } from 'react-router-dom';
import "./BrowsingHistoryCard.scss";
import Gig from '../../pages/gig/Gig';

const BrowsingHistoryCard = ({ item }) => {
  const handleClick = () => {
    // Perform any necessary logic

    // Change the route and reload the page
    window.location.href = `/gig/${item._id}`;
  };



  
  return (
    <div className="card mb-3"  onClick={() => window.location.href = `/gig/${item._id}`}>
      <img src={item?.cover} className="card-img" alt="" />
      <div className="card-body text-center">
        <h5 className="card-title">{item?.title}</h5>
        {!isNaN(item?.totalStars / item?.starNumber) && (
          <div className="d-flex justify-content-left align-items-left">
            <i className="bi bi-star-fill" style={{color: 'orange'}}></i>
            <span className="ms-1">{Math.round(item?.totalStars / item?.starNumber)}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowsingHistoryCard;
