import React, { useState } from "react";
import "./Default.css";
import logo from '../../assets/icons/trello-logo-white.png';
import demoimg from '../../assets/images/pop7.png';
import { Fade } from "react-reveal";
import { useHistory } from 'react-router-dom';


// import { NavLink, Link } from "react-router-dom";


function DefaultPage() {
  //   const exp = workExperiences.viewExperiences;

  const link = useHistory();

  const [email, setemail] = useState("");

  const changed = (evt) => { 
    console.log(evt.target.value);
    setemail(evt.target.value);
  }

  return (
    <Fade top duration={1000} distance="20px">
      <div className="Navbar">

        <header className="header">
          
          {/* Logo */}
          <a href="/" className="logo">
            <img src={logo} className="logo-icon" alt="Trello Clone" />
          </a>

          
        <ul className="menu">
           
                  {/* Login Buttons */}
                  <li>  <a href="/login" style={{ "margin-top": 10 }}>Log In</a>  </li>
                  

                  {/* SignIn Buttons */}
                  <li>
                    <a>

                      <div className='button'>
                        <button className="button" onClick={() => link.push('/signup')} >Sign Up</button>
                      </div>

                    </a>
                  </li>
        
        </ul>
        
        </header>



        <img src={demoimg} className="demo-image"></img>




        {/* Pass Email-Id to SignUp Page */}
        <signup className="signup">
          <input onChange={changed} type='text' placeholder="Email" />
          <span />
          <button className="signupButton" onClick={() => link.push({ pathname: '/signup', name: email })} > Sign Up - It's Free </button>
        </signup>




      </div>
    </Fade>
  );
}

export default DefaultPage;



