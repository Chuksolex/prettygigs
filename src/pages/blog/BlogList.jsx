// BlogList.js

import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/sideBar/sideBar';

import './BlogList.scss';
import newRequest from '../../utils/newRequest.js';
import { Helmet } from 'react-helmet';


const BlogList = ({recommendedServices}) => {
  

    const [blogPosts, setBlogPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
      const fetchBlogPosts = async () => {
        try {
          const response = await newRequest.get('/blog');
        //   setBlogPosts(response.data);
          const sortedBlogPosts = response.data.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
          });
  
          setBlogPosts(sortedBlogPosts);
          setLoading(false);
      } catch (error) {
        console.error(error);
        setError('Failed to fetch blog posts. Check network and try again.');
        setLoading(false);
      }
    };
  
      fetchBlogPosts();
    }, []);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
      };
    
      // Filter blog posts based on the search query
      const filteredBlogPosts = blogPosts.filter((blogPost) =>
        blogPost.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

    if (loading) {
        return <div className='blog-list'>Loading...</div>;
      }
    
      if (error) {
        return <div className='blog-list'>Error: {error}</div>;
      }

      function truncateText(text, maxLength) {
        if (text.length <= maxLength) {
          return text;
        }
        return text.slice(0, maxLength) + '...→';
      }
    

  return (
    <div className="container">
      <Helmet>
        <title>Blog </title>
        <meta name="description" content="- List of blogs in prettygigs.com.ng ." />
      </Helmet>
      <h1 className='blogtitle'>Blog Posts</h1>
      <p className="intro">Welcome to the blog page of Prettygis, your go-to destination for well researched and well written articles related to digital services space, gigs, and live tutorials! Whether you're a freelancer, an entrepreneur, a business manager, or simply passionate about the digital world, you've come to the right place to find helpful content...</p>
      <hr className='hor1'/>
      <div className='row'>
        <div className='col-12 col-md-9 col-lg-9' >
        <div className="row">
          {blogPosts.map((post) => (
            <div  key={post._id} className="col-md-4 mb-2">
              <Link to={`/blog/${post._id}`} style={{ textDecoration: 'none' }}>
                <div className="card blog-list">
                  <img
                    src={post.coverImage}
                    className="card-img-top"
                    alt={post.title}
                    style={{ maxHeight: '150px', objectFit: 'cover',borderRadius:"10px", }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                   <p className="card-text">  {truncateText(post.content, 70)}</p>
                    {/* /<p className="blog-post__author">Author: {post.author}</p> */}
                    <p className="blog-post__date"><i className="bi bi-calendar3"></i> {new Date (post.date).toDateString("eng-NG", "numeric")}</p>
                  </div>

                  {currentUser && currentUser.isSeller ? (
                    <div className="blog-post__actions">
                      <button>Edit</button>
                      <button>Delete</button>
                    </div>
                  ) : null}
                </div>
              </Link>
            </div>
          ))}
        
        </div>
      
      </div>

    <div className="col-12 col-md-3 col-lg-3">
        <Sidebar recommendedServices={recommendedServices} />
    </div>
    </div>
    </div>
  );
};




export default BlogList;
