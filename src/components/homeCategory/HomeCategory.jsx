import { Link } from 'react-router-dom';
import { homeCategoryData } from '../data/homeCategoryData.js';

const HomeCategory = () => {
  function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + '...';
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 " style={{color: "green"}}>Our Services</h2>
      <div className="row">
        {homeCategoryData.map(gig => (
          <div key={gig.id} className="col-md-3 mb-4">
            {/* <Link to={`/gigs/${gig.id}`} style={{ textDecoration: 'none' }}> */}
            <Link to={`/services/${gig.id}`} style={{ textDecoration: 'none' }}>

              <div className="card">
                <img
                  src={gig.imgSrc}
                  className="card-img-top"
                  alt={gig.title}
                  style={{ maxHeight: '150px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{gig.title}</h5>
                  <p className="card-text">{truncateText(gig.description, 70)}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCategory;
