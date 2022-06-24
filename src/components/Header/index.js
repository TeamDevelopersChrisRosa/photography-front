import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import './styles.scss';


const Header = ({
  isLogged,
  firstName,
  lastName,
  logout,
  
}) => {

  let location = useLocation();

  const nav = useNavigate();

  const handleLogout = (evt) => {
    evt.preventDefault();
    logout();
    nav('/')
  }

  return (

    <div className='header'> 
      <div className='header__logoAndTitle'> 
        <img className='header__logoAndTitle__logo' src="https://www.ville-sathonaycamp.fr/wp-content/uploads/2021/06/placeholder-1.png" alt=""/>
        <a href='/' className='header__logoAndTitle__title'> App Title </a> 
      </div>
      { isLogged ? (
        <div className='header__messageAndButton'>
          <div className='header__messageAndButton__content'>
            <p className='header__messageAndButton__content__message'> Bonjour { firstName } { lastName } </p>
            <button className='myButton m-auto' onClick={handleLogout}> Se déconnecter </button>
          </div>
          <i className="bi bi-person header__messageAndButton__content__icon"></i>
        </div>
         
       ): (
       <>
       { location.pathname === '/login' ? null : ( <a href='/login' className='myButton my-auto'> Se connecter </a> ) }
       </>
       )}
     
      
    </div>

  )};


export default Header;
