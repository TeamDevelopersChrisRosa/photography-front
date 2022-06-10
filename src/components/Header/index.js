import React from 'react';
import './styles.scss';


const Header = ({
  isLogged,
  firstName,
  lastName,
  logout,
}) => {

  const handleLogout = (evt) => {
    evt.preventDefault();
    logout();
  }

  return (

    <div className='header'> 
      <div className='header__logoAndTitle'> 
        <img className='header__logoAndTitle__logo' src="https://www.ville-sathonaycamp.fr/wp-content/uploads/2021/06/placeholder-1.png" alt=""/>
        <h1 className='header__logoAndTitle__title'> App Title </h1> 
      </div>
      { isLogged ? (
        <div className='header__messageAndButton'>
        <p className='header__messageAndButton__message'> Bonjour { firstName } { lastName } </p>
        <button className='header__messageAndButton__button' onClick={handleLogout}> Se déconnecter </button>
        </div>
         
       ): <a href='/login' className='header__link'> Login </a> }
     
      
    </div>

  )};


export default Header;
