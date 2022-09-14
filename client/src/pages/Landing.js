import React from 'react';
import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';
import styled from 'styled-components';


const Landing = () => {
  return <Wrapper>
    <nav>
        <img src={logo} alt="jobify" className='logo'/>
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


const Wrapper =  styled.main`
    nav{
        width: var(--fluid-width);
        max-width: var(--max-width);
        margin: 0 auto;
        height: var(--nav-height);
        display: flex;
        align-items: center;
    }
    .page{
        mein-height: calc(100vh - var(--nav-height));
        display: grid;
        align-items: center;
        margin-top: -3rem;
    }
    h1{
        font-weight:700;
        span{
            color: var(--primary-500);
        }
    }
    p{
        color: var(--grey-500); 
    }
    .main-img{
        display:none;
    }
    @media (min-width:992px){
        .page{
            grid-template-columns: 1fr 1fr;
            column-gap: 3rem;
        }
        .main-img{
        display:block;
        }
    }
`


export default Landing;