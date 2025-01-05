import "./home.scss";
import { useNavigate } from "react-router-dom";

const Home = () => {
   const navigate = useNavigate();

   const imagePath = '..\public\welcome.jpg';

   const handleClickBackBtn = () => {
      navigate("/Jobs");
   };

   return (
      <div className="home-container">
         <header className="hero-section">
            <div className="hero-content">
               <h1>Welcome to Our Website</h1>
               <p>
                  Explore exciting job opportunities and connect with top companies. 
                  Your career journey starts here!
               </p>
               <button className="cta-button" onClick={handleClickBackBtn}>Get Started</button>
            </div>
            <img 
               src={imagePath} // Use imagePath here
               alt="Welcome"
            />
         </header>

         <section className="features">
            <div className="feature">
               <img 
                  src="/path-to-your-image/job-search.jpg" 
                  alt="Jobs" 
                  className="feature-image" 
               />
               <h3>Find Your Dream Job</h3>
               <p>Discover thousands of job listings tailored to your skills and goals.</p>
            </div>
            <div className="feature">
               <img 
                  src="/path-to-your-image/company.jpg" 
                  alt="Companies" 
                  className="feature-image" 
               />
               <h3>Top Companies</h3>
               <p>Connect with companies that value talent and innovation.</p>
            </div>
            <div className="feature">
               <img 
                  src="/path-to-your-image/network.jpg" 
                  alt="Networking" 
                  className="feature-image" 
               />
               <h3>Expand Your Network</h3>
               <p>Build relationships and grow your professional network.</p>
            </div>
         </section>
      </div>
   );
};

export default Home;
