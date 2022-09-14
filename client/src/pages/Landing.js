import React from 'react';
import Wrapper from '../assets/wrappers/LandingPage'
import main from '../assets/images/main.svg';
import styled from 'styled-components';
import { Logo } from '../components';


const Landing = () => {
  return <Wrapper>
    <nav>
        <Logo/>
    </nav>

    <div className="container page">
        <div className="info">
            <h1>job <span>tracking</span></h1>
            <p>
            I'm baby cornhole farm-to-table hella heirloom fixie, 90's typewriter humblebrag mukbang distillery 8-bit whatever chicharrones irony VHS.
            </p>
            <button className="btn btn-hero">
                Login/Register
            </button>
        </div>

        <img src={main} alt="job-hunt" className='img main-img'/>
    </div>


  </Wrapper>
}



export default Landing;