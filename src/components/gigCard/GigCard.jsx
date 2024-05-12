// import React from 'react';
// import { Link, useNavigate, useNavigation, useParams } from 'react-router-dom';
// import "./GigCard.scss";
// import { useQuery } from '@tanstack/react-query';
// import newRequest from '../../utils/newRequest';







// const GigCard = ({item, currencyCode}) => {

//     const { isLoading, error, data} = useQuery({
//         queryKey: [item.userId],
//         queryFn: () =>
//           newRequest.get(`/users/${item.userId}`)
//           .then(
//             (res) => {
//             return res.data;
//           })
        
//       });
//       const navigate = useNavigate();


//     const handleClick = () => {
      
//       // Load browsing history from local storage
//       const storedHistory = localStorage.getItem('browsingHistory');
//       let parsedHistory = [];
//       if (storedHistory) parsedHistory = JSON.parse(storedHistory);
    
//       // Check if the gig already exists in the browsing history
//       const gigExists = parsedHistory.some((gig) => gig._id === item._id);
    
//       // If the gig doesn't exist, add it to the browsing history
//       if (!gigExists) {
//         parsedHistory.push(item);
    
//         // Save updated browsing history to local storage
//         localStorage.setItem('browsingHistory', JSON.stringify(parsedHistory));
//       }
    
//       // Navigate to the gig page
//       navigate(`/gig/${item._id}`);
//     };




//   return (
//     <div className='gigCard'>
//         <div >  {/*Here I had a lot of headache...since you mapped gigs from grigs component, here you link particular gig with itemid as /gig/item._id  */}
//             <img src={item.cover} alt="gig cover image" />
//             <div className="info">
//               {isLoading ? ("Loading.."
//                  ):  error ? (
//                     "Something went wrong"
//                     ) : (      

//                          <div className="user">
//                               <img src={data.img || "/img/noavatar.jpg"} alt="" />
                              
//                               <span>{data.username}</span>
//                               {item.discountType !== "None" && item.discountOffer > 0 && item.discountValidThrough && new Date(item.discountValidThrough) >= new Date() && (
//                                 <div className="promo-badge">
//                                   <span className="promo-badge-text1">{item.discountType}:</span>
//                                   <span className="promo-badge-text2"> - {item.discountOffer}%</span>
//                                 </div>
//                               )}
      
      

//                           </div>
//                 )}
//                 <Link to={`/gig/${item._id}`} onClick={handleClick} className=' linki'  ><p className=' fs-3 fw-normal' >{item.title}</p></Link>
                
//                 <div className="star ">
//                     <img src="./img/star.png" alt="" />
//                     <span>{!isNaN(item.totalStars / item.starNumber) && Math.round(item.totalStars / item.starNumber)} ({item.starNumber})</span>
//                 </div>                

//             </div>

//             <div className="details">
//                 {/* <img src="./img/heart.png" alt="" /> */}

//                 <div className="price">
//                      <h4>From   {currencyCode} {item.price_basic}</h4>
//                 </div>            
//            </div>

//         </div>
    
//     </div>
   

//   )
// }

// export default GigCard

import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import "./GigCard.css";
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';







const GigCard = ({item, currencyCode}) => {

    const { isLoading, error, data} = useQuery({
        queryKey: [item.userId],
        queryFn: () =>
          newRequest.get(`/users/${item.userId}`)
          .then(
            (res) => {
            return res.data;
          })
        
      });
      const navigate = useNavigate();


    const handleClick = () => {
      
      // Load browsing history from local storage
      const storedHistory = localStorage.getItem('browsingHistory');
      let parsedHistory = [];
      if (storedHistory) parsedHistory = JSON.parse(storedHistory);
    
      // Check if the gig already exists in the browsing history
      const gigExists = parsedHistory.some((gig) => gig._id === item._id);
    
      // If the gig doesn't exist, add it to the browsing history
      if (!gigExists) {
        parsedHistory.push(item);
    
        // Save updated browsing history to local storage
        localStorage.setItem('browsingHistory', JSON.stringify(parsedHistory));
      }
    
      // Navigate to the gig page
      navigate(`/gig/${item._id}`);
    };




  return (
    <div className="card ">
    <Link to={`/gig/${item._id}`} onClick={handleClick}>
      <img src={item.cover} className="card-img" alt="gig cover image" />
      {item.discountType !== "None" && item.discountOffer > 0 && item.discountValidThrough && new Date(item.discountValidThrough) >= new Date() && (
        <div className="promo-badge">
          <span className="promo-badge-text1">{item.discountType}:</span>
          <span className="promo-badge-text2"> - {item.discountOffer}%</span>
        </div>
      )}
      <div className="card-body">
        <h5 className="card-title text-left">{item.title}</h5>
        <div className="user"></div>
        <div className="star">
        <i className="bi bi-star-fill"></i>
          <span>{!isNaN(item.totalStars / item.starNumber) && Math.round(item.totalStars / item.starNumber)} ({item.starNumber})</span>
        </div>
        <div className="details">
        <i className="bi bi-heart-fill"></i> 

                 <div className="price">
                      <h4>From   {currencyCode} {item.price_basic}</h4>
                 </div>            
            </div>
      </div>
    </Link>
  </div>
   

  )
}

export default GigCard




