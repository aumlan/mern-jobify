import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';

const Error = () => {
  return (
    <Wrapper className='full-page'>
        <div>
            <img src={img} alt="not found" />
            <h3>ohh! page not found</h3>
            <p> We cant seem to find the page you are looking for</p>
            <Link to='/'>back</Link>
        </div>
    </Wrapper>
  )
}

export default Error