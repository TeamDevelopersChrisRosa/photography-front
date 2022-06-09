import React from 'react';
import './styles.scss';


const Header = () => {

  return (

    <div className='header'> 
      <img className='header__logo' src="https://www.ville-sathonaycamp.fr/wp-content/uploads/2021/06/placeholder-1.png" alt=""/>
      <h1 className='header__title'> App Title </h1> 
      <a href='/login' className='header__link'> Login </a>
    </div>

  )};


export default Header;
