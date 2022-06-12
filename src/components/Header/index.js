import React from 'react';
import { useLocation } from 'react-router-dom';

import './styles.scss';


const Header = ({
  isLogged,
  firstName,
  lastName,
  logout,
  
}) => {

  let location = useLocation();

  const handleLogout = (evt) => {
    evt.preventDefault();
    logout();
  }

  return (

    <div className='header'> 
      <div className='header__logoAndTitle'> 
        <img className='header__logoAndTitle__logo' src="https://www.ville-sathonaycamp.fr/wp-content/uploads/2021/06/placeholder-1.png" alt=""/>
        <a href='/' className='header__logoAndTitle__title'> App Title </a> 
      </div>
      { isLogged ? (
        <div className='header__messageAndButton'>
        <p className='header__messageAndButton__message'> Bonjour { firstName } { lastName } </p>
        <button className='myButton m-auto' onClick={handleLogout}> Se déconnecter </button>
        </div>
         
       ): (
       <>
       { location.pathname =! '/login' ? ( <a href='/login' className='myButton my-auto'> Login </a> ) : null }
       
       </>
       )}
     
      
    </div>

  )};


export default Header;
