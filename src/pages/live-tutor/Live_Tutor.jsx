
 import "./Live_Tutor.scss";
import Live_TutorSlide from "../../components/slider/Live_TutorSlider";
import TutorFaq from "../../components/faq/TutorFaq";
import { useNavigate } from "react-router-dom";
import videosrc from "../../assets/Live-tutor-video1.mp4"



const Live_Tutor = () => { 
    const navigate = useNavigate()
 

 



const categories = [
  {
    name: 'Programming & Tech',
    subcategories: ['Web Design', 'Web Development', 'Software'],
  },
  {
    name: 'Digital Marketing',
    subcategories: ['Email Marketing', 'SEO Services', 'Social Media Marketing'],
  },
  {
    name: 'Advertising',
    subcategories: [],
  },
  {
    name: 'Business',
    subcategories: [],
  },
  {
    name: 'Writing & Translation',
    subcategories: [
      'Blog Posts & Articles',
      'Transcription',
      'Translation',
      'Technical Writing',
      'Academic & Research Writing',
      'Ghost-Writing',
    ],
  },
  {
    name: 'Graphics & Design',
    subcategories: [
      'Logo & Identity Branding',
      'Packaging & Labels',
      'Art & Illustration',
      'Visual Design',
      'Print Design',
    ],
  },
  {
    name: 'Music, Audio & Videos',
    subcategories: [
      'Voice-over',
      'Video Editing',
      '2-D Animations',
      '3-D Animations',
      'Explainer Videos',
    ],
  },
];



  
  return (
 
    <div className='tutor-page'>
       

         <Live_TutorSlide />

        <div className="tutor-message">
                <div className="left-column">
                    <h4>Unlock the Future for Your Child Through Coding</h4>
                    <p>
                    Are you looking for a fun and engaging way to introduce your child to the world of coding?
                    Look no further! Our Live Tutorial on Google Meet offers an interactive learning experience
                    designed specifically for kids aged 7 and above, with adults welcome to join in the learning journey too.
                    </p>
                    <p>
                      I will be dedicating minimum 4 hours weekly through a stretch of 3-Months to hammer in coding concepts and and knowledge to you or your wards when you sign-up for the class today. And, I must say, the fee for this course is nothing compared to the expertise, experience, time, and energy I have invested in preparing the curriculum to become top notch, engaging, easy to understand, and follow through.
                    </p>

                </div>

                <div className="right-column">
                    <h4>What Your Child Will Learn:</h4>
                    <p>
                    At Prettygigs Live Classess, we believe in empowering young minds with the skills they need to thrive in the digital age.
                    Through our comprehensive curriculum, your child will learn essential coding concepts and logics,
                    apply their coding skills to solve real-world problems, and build exciting projects. They will:
                    </p>
                    <ol type="i">
                        <li>Learn essential coding concepts and logics</li>
                        <li>Apply their coding skills to solve real-world problems</li>
                        <li>Build exciting games, calculators, apps, websites, and other software projects</li>
                        <li>Use visual aided and animated softwares that will breakdown hard coding concepts and capture their learning interest</li>
                        <li>Practice and practice until their coding muscles bulge out.</li>
                    </ol>
            </div>


        </div>
        <div className="tutor-message">
                <div className="left-column2">
                    <h4>Course Structure:</h4>
                    <p>
                    Are you looking for a fun and engaging way to introduce your child to the world of coding?
                    Look no further! Our Live Tutorial on Google Meet offers an interactive learning experience
                    designed specifically for kids aged 7 and above, with adults welcome to join in the learning journey too.
                    </p>
                    <p>
                    Transform idle hours spent on mindless TV shows and movies into vibrant, educational experiences! Say goodbye to endless scrolling and passive consumption. Instead, channel your child's boundless energy into something truly empowering and enjoyable.
                    </p>
                    <p>
                    Imagine if, instead of merely playing computer games, your child could create them from scratch. With our engaging coding tutorials, your child can turn their passion for gaming into a journey of creativity and skill-building.
                    </p>

                </div>

                <div className="right-column2">
                    <h4>Small Group Learning:</h4>
                    <p>
                    To ensure personalized attention and effective learning, we keep our class sizes small, with groups of fewer than 10 kids. This allows our experienced instructors to provide individualized guidance and closely monitor your child's progress throughout the course.
                    </p>
                    <p>
                    Let's revolutionize screen time. Together, we'll unlock the potential of your child's imagination and transform it into tangible, interactive experiences. It's time to shift from mere spectators to active creators of tomorrow's digital landscape.
                    </p>
                    <p>
                    Empower your child to shape their own future. Enroll them in our coding program today."
                    </p>
                    
            </div>


        </div>
        
        
         <hr />

         <div className="tutor-message">
                <div className="left-column">
                    <h4>What Our Live Class Looks Like:</h4>
                    <video width="100%" height="240" style={{borderRadius: "10px"}} controls>
                        <source src={videosrc} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                </div>

                <div className="right-column">
                    <ul type="square">
                        <li>
                            <h4>Learn by Doing:</h4>
                            <span>
                                At Prettygigs Live Classes, we believe in hands-on learning. Our tutorials are all about getting your child involved in projects right away. From coding games to building websites, they'll dive into practical tasks that ignite their creativity and problem-solving skills from the word-go.
                            </span>
                        
                        </li>
                        <li>
                            <h4>Create, Don't Just Consume Tech: </h4>
                            <span>
                                With us, your child isn't just learning to code; they're becoming creators. Through our project-based approach, they'll tackle real-world challenges, gaining confidence with every project they complete. At Prettygigs Live Classes, we empower kids to shape their own digital futures.
                            </span>

                        </li>
                    </ul>
                    
                   
                    
            </div>


        </div>


        <div className="tutor-message">
                <div className="left-column2">
                    <h4>Happy Story from the Tutor & Parent:</h4>
                    <p>
                        Someone had recommended to Kingskid that I could help him fix a website issue which his former developer could not handle. So after the job, he was excited, very much. My friend who gave him the recommendation kept on telling me, that the man kept thanking him for brining me in. And as God will have it, it happened that his eldest kid, Daniel has been taking Python classess where they lived in the US but he was not satisfied with the boy's progress. So, he asked if I could coach the boy in coding.
                        
                    </p>
                    <p>
                        Long story cut short. Kingskid has three kids but only the first son who was doing the Python course was interested in coding. But by the time I started with him, all the three kids joined and their interest has kepted on growing due to how engaging our class used to be.
                    </p>
                    <p>
                        That could be your story too if you enroll your child today. Most of the Tech-gurus and stars we celebrate today, from Mark Zuckerberg, the founder and CEO of Facebook , to Bill Gates, the founder of Microsoft, Steve Wozniak, the co-founder of Apple, Jack Patrick Dorsey, the co-founder and CEO of Twitter and so on and so forth have one thing in common: They started learning to code as kids.
                    </p>
                </div>

                <div className="right-column2">
                   
                            <h4>Enroll Today:</h4>
                            <p>
                            Secure your child's spot in our upcoming Live Tutorial on Google Meet or Zoom and 
                            watch them unleash their potential through coding. 
                            <p style={{color:""}}>The fee for the three(3)-month course is <span className="fs-5"> <del> <del>N</del>144000</del> <del>($101)</del> <del>N</del>115,000 ($81)</span> per kid, offering exceptional value for a transformative learning experience.</p>
                            </p>
                            <p>
                            Don't miss out on this opportunity to give your child the gift of coding. Spaces are limited, so enroll now to reserve your spot! 
                            </p>
                            <button onClick={() =>navigate("/live-tutor-register")} style={{background:"#fbb040"}}>Register Now</button>
                           
                 
                    
                   
                    
            </div>


        </div>
      

         <div className='faq'>
          <h3 style={{color: "green"}}>Frequently Asked Questions</h3>
          <TutorFaq  />
        </div>

     
    


    </div>
   
  )
}

export default Live_Tutor;