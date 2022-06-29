import React from 'react';
import './styles.scss';
import { useLocation } from 'react-router-dom';



const Footer = () => {
  let location = useLocation();

  return (
    <>
      { location.pathname === '/login' ? null : ( 
        <div className='footer'> 
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link link-light" href="/">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-light" href="/">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-light" href="/">Link</a>
            </li>
          </ul>
        </div>
      ) }
    </>
  )};


export default Footer;
