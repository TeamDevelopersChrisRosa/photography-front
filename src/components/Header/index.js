import React from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
import MediaQuery from 'react-responsive'


import Logo from './Logo.png';

import './styles.scss';


export const Header = ({
  isLogged,
  firstName,
  lastName,
  logout,
  id,
  pathName
  
}) => {

  // const nav = useNavigate();

  const handleLogout = (evt) => {
    evt.preventDefault();
    logout();
    // nav('/')
  }

  return (

    <div className='header'> 
    
    {!isLogged ? (
      <>
      <MediaQuery minWidth={769}>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
            </div>
            <div className="col">
              <a href='/'><img src={Logo} className="header__logo" alt="logo" /> </a>
            </div>
            <div className="col header__login">
              <>
                { pathName === '/login' ? null : ( <a href='/login' className='myButton my-auto'> Se connecter </a> ) }
              </>
            </div>
          </div>
        </div>
      </MediaQuery>
        <MediaQuery maxWidth={768}>
          <div className="header__mobile">
            <a href='/'><img src={Logo} className="header__logo" alt="logo" /> </a>
            { pathName === '/login' ? null : ( <a href='/login' className='myButton my-auto'> Se connecter </a> ) }
          </div>
        </MediaQuery>
      </>
      ) : 
      <>
    
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <a href='/'><img src={Logo} className="header__logo__small" alt="logo" /> </a>
            </div>
            <div className="col header__person">
                <div className='header__person__first'>
                  <i className='bi bi-person-fill header__person__first__icon'></i>
                  <div className='header__person__first__message'> Bonjour { firstName } { lastName } </div>
                </div>

                <div className='header__person__second'>
                  <a href={/mon-compte/+id} className='mySmallButton header__person__second__button'> Mon compte </a>
                  <button className='mySmallButton header__person__second__button bg-danger' onClick={handleLogout}> Se déconnecter </button>
                </div>
              </div>
          </div>
        </div>
      

      </> 
      }
        

    </div>
    
  )};