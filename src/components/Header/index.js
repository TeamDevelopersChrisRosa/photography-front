import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import './styles.scss';


const Header = ({
  isLogged,
  firstName,
  lastName,
  logout,
  id
  
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
        <div className='header__person'>
          <div className='header__person__first'>
            <i className='bi bi-person-fill header__person__first__icon'></i>
            <div className='header__person__first__message'> Bonjour { firstName } { lastName } </div>
          </div>

          <div className='header__person__second'>
            <a href={/account/+id} className='mySmallButton header__person__second__button'> Mon compte </a>
            <button className='mySmallButton header__person__second__button bg-danger' onClick={handleLogout}> Se déconnecter </button>
          </div>
        </div>
         
       ): (
       <>
       { location.pathname === '/login' ? null : ( <a href='/login' className='myButton my-auto'> Se connecter </a> ) }
       </>
       )}
     
      
    </div>

  )};


export default Header;
