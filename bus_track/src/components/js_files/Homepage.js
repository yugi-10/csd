import React, { useContext } from 'react';
import { Link,useLocation} from "react-router-dom";
import UserContext from './UserContext';
import '../css_files/Homepage.css';
const Homepage = () => {
  const {user} = useContext(UserContext);
  const location =useLocation();
  const id = location.state?location.state.id:'Guest';
  
  return (
    <div className="homepage">
      <section className="home">
        <div className="home-content">
          <h1>Real-Time School Bus GPS Tracking System </h1>
          <p>Save time, money and ensure safety with the most robust and secure school bus tracking.</p>
          <button className="exp-button"><Link to="/track">Let's track</Link></button>
        </div>
      </section>
      {/* <div className="button" onClick={() => setLoginUser({})}>Logout</div> */}
    </div>
  );
};

export default Homepage;