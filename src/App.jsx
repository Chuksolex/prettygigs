import { useEffect } from 'react';
import './App.css';
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import NotFound from './pages/notFound/NotFound.jsx';
import Home from './pages/home/Home';
import About from  "./pages/about/About.jsx"
import Navbar from "./components/navbar/Navbar.jsx"
import Footer from "./components/footer/Footer.jsx"
import ReferencesAndAttribution from './pages/references/ReferencesAndAtrribution.jsx';
import Live_Tutor from './pages/live-tutor/Live_Tutor.jsx';
import Live_Tutor_Register from './pages/live-tutor/Live_Tutor_Register.jsx';
import Privacy from './pages/privacy/Privacy.jsx';
import Terms from './pages/terms/Terms.jsx';
import BlogList from './pages/blog/BlogList.jsx';
import BlogForm from './pages/blogForm/BlogForm.jsx';
import BlogPostDetails from './pages/blogPostDetails/BlogPostDetails.jsx';
import Gigs from './pages/gigs/Gigs.jsx';
import Gig from './pages/gig/Gig.jsx';
import Orders from './pages/orders/Orders.jsx';
import Pay from './pages/pay/Pay.jsx';
import SingleOrder from './pages/orders/SingleOrder.jsx';
import ProjectRequest from "./pages/projectrequest/ProjectRequest.jsx";
import Help from "./pages/help/Help.jsx";
import Contact from './pages/contact/Contact.jsx';
import MyCart from './pages/myCart/MyCart.jsx';
import MyGigs from './pages/myGigs/MyGigs.jsx';
import Add from './pages/add/Add.jsx';
import { fetchAndUpdateGigsData, checkAndFetchIfExpired } from './reducers/actions.js';
import { useDispatch, useSelector } from 'react-redux';
import GigPackage from './pages/gigPackage/GigPackage.jsx';
import Register from './pages/register/Register.jsx';
import CheckInbox from './pages/checkInbox/CheckInbox.jsx';
import Login from './pages/login/Login.jsx';
import Services from './pages/services/Services.jsx';
import WebDesign from './pages/services/Web-Design.jsx';
import Advertising from './pages/services/Advertising.jsx';
import Software from './pages/services/Software.jsx';
import Illustration from './pages/services/Illustration.jsx';
import DigitalMarketing from './pages/services/Digital-Marketing.jsx';
import Message from './pages/message/Message.jsx';
import Messages from './pages/messages/Messages.jsx';
//import LpSolver from './pages/analysis/OnlineTutorAnalysis.jsx';
import { Helmet } from 'react-helmet';
import SupportRequest from './pages/supportrequest/SupportRequest.jsx';
import VerifyEmail from './pages/verifyEmail/VerifyEmail.jsx';
import Success from './pages/success/Success.jsx';
import SimpleUpload from './utils/simpleUpload.jsx';
import ReactGA from 'react-ga4';
import Career from './pages/career/Career.jsx';




function App() {

  ReactGA.initialize('G-EBXTQ1JT0M');


  const dispatch = useDispatch(); 
  const gigsTimestamp = useSelector(state => state.gigsSlice.timestamp ); 
  const selectedCurrency = useSelector(state => state.currencySlice.selectedCurrency); // Replace 'currency' with your actual state slice
  
  console.log("timestamp at app:", gigsTimestamp);
  console.log("currency showing at app:", selectedCurrency);
  
 useEffect(() => {
    dispatch(checkAndFetchIfExpired()); // Fetch and update gigs data with expiration logic
  }, [dispatch, gigsTimestamp]); // Make sure to include dispatch as a dependency if you're using ESLint's exhaustive-deps rule

  useEffect(() => {
    // Fetch data when selected currency changes
    dispatch(fetchAndUpdateGigsData());
  
  }, [dispatch, selectedCurrency]);


  
  const Layout = () => {
    return (
      <div className="app">
      
         <Navbar/>
         <Helmet>
        <title>Prettygigs.com.NG</title>
        <meta name="description" content="Providing digital services: web development, data analytics, graphics designs, etc." />
      </Helmet>
         <Outlet/>
         <Footer/>    

     </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children : [
        {path: "/", element: <Home />},
        {path: "/referencesandattribution", element: <ReferencesAndAttribution />},
        {path: "/about", element: <About />},
        {path: "/live-tutor", element: <Live_Tutor />},
        {path: "/live-tutor-register", element: <Live_Tutor_Register/>},
        {path: "/privacy", element: <Privacy />},
        {path: "/terms", element: <Terms />},
        {path: "/blog", element: <BlogList/>},
        {path: "/blog/:id",     element: <BlogPostDetails />  },
        {path: "/create-blog/",      element: <BlogForm />    },
        {path: "/edit-blog/:id",    element: <BlogForm />    },
        {  path: "/gig/:id", element: <Gig />},       
        {  path: "/orders", element: <Orders />},          
        {path: "/singleorder/:id",   element: <SingleOrder />},
        {path: "/gigs",  element: <Gigs />  },
        {path: "/project-request", element: <ProjectRequest />  },
        {path: "/help",element: <Help />},
        {path: "/contact", element: <Contact />},
        {path: "/mycart", element: <MyCart />},
        {path: "/mygigs", element: <MyGigs />},
        {path: "/add", element: <Add />},
        {path: "/add/:id", element: <Add />},

        {path: "/gigpackage", element: <GigPackage /> },
        {path: "/register", element: <Register />},
        {path: "/login", element: <Login />},
        {path: "/checkinbox", element: <CheckInbox />},
        {path: "/pay", element: <Pay />},
        {path: "/services", element: <Services />},
        {path: "/services/web-design", element: <WebDesign />},
        {path: "/services/advertising", element: <Advertising />},
        {path: "/services/software", element: <Software />},
        {path: "/services/illustration", element: <Illustration />},
        {path: "/services/digital-marketing", element: <DigitalMarketing />},
        {path: "/message/:id", element: <Message/>},
        {path: "/messages", element: <Messages/>},
        //{path: "/analysis/online-tutor", element: <LpSolver />},
        {path: "/support-request", element: <SupportRequest />},
        {path: "/verify-email", element: <VerifyEmail />},
        {path: "/success", element: <Success />},
        {path: "/simpleupload", element: <SimpleUpload />},
        {path: "/career", element: <Career />},








          
            
           
        // {path: "/contact", element: <Contact />},
        // {path: "/services", element: <Services/>},
        // {path: "/services/:serviceId", element: <ServiceDetail/>},
        // {path: "/portfolio", element: <Portfolio/>},



        { path: "*", element: <NotFound />}





      ]
    }
  ]);

  return (
    <div>
       <RouterProvider router={router} />

 
    </div>
  )

 
}

export default App
