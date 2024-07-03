import { useNavigate} from "react-router-dom";
import "./NotFound.css";
import ReactGA from "react-ga4";

export default function NotFound() {
  ReactGA.send(
    {
      hitType: "pageview",
      page: '/notfound',
      title: "NotFound"
    }
  );

  ReactGA.event({
    category: 'User Interaction',
    action: 'Clicked Call to Action Button',
    label: 'GoToHOme',
  });
  
    const navigate = useNavigate()

function goToHome(){

  navigate("/")
}



    return (
       
        <div className="container text-center h-100"  style={{height: "100vh"}}>
                 <h1>Oops! 404! That Page requested not found.</h1>
                 <p onClick={goToHome} role="button">Go to Home: </p>

            </div>
 

    )
    }