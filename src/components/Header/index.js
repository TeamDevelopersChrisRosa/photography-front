import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Logo from './Logo.png';

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
    
    {!isLogged ? (
      <div class="container-fluid">
        <div class="row">
          <div class="col">
          </div>
          <div class="col">
            <a href='/'><img src={Logo} className="header__logo" alt="logo" /> </a>
          </div>
          <div class="col header__login">
            <>
              { location.pathname === '/login' ? null : ( <a href='/login' className='myButton my-auto'> Se connecter </a> ) }
            </>
          </div>
        </div>
      </div>
      ) : 
      <>
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <a href='/'><img src={Logo} className="header__logo__small" alt="logo" /> </a>
          </div>
          <div class="col header__person">
              <div className='header__person__first'>
                <i className='bi bi-person-fill header__person__first__icon'></i>
                <div className='header__person__first__message'> Bonjour { firstName } { lastName } </div>
              </div>

              <div className='header__person__second'>
                <a href={/account/+id} className='mySmallButton header__person__second__button'> Mon compte </a>
                <button className='mySmallButton header__person__second__button bg-danger' onClick={handleLogout}> Se déconnecter </button>
              </div>
            </div>
        </div>
      </div>
      </> 
      }
        

    </div>
    
    


  )};


export default Header;
