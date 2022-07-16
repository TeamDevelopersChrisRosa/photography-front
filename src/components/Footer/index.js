import React from 'react';
import './styles.scss';


/* export class Footer extends React.Component {
  render(
    let location = useLocation();
  ) {
    return <>
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
  }
} */
export const Footer = () => {
  /* let location = useLocation(); */

  return (
    <>
      {/* { location.pathname === '/login' ? null : ( */} 
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
      {/* )} */}
    </>
  )};

