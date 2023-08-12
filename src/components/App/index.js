import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import './styles.scss';

import { Home } from './../Home';
import Contact from './../../containers/Contact';
import Login from './../../containers/Login';
import Dashboard from '../../containers/Dashboard';
import Shooting from '../../containers/Shooting';
import Favorites from '../../containers/Favorites';
import Page from '../../containers/Page';
import Account from '../../containers/Account';
import ChangeTemporaryPassword from '../../containers/ChangeTemporaryPassword';
import NavBar from '../../containers/NavBar';
import Header from '../../containers/Header';

import NewClient from '../../containers/NewClient';
import Admin from '../../containers/Admin';

import { Footer } from '../Footer';
import NewGallery from '../../containers/NewGallery';


export function App({
  isLogged,
  shootingPages,
  portfolioPages,
  itsMePage,
  isPhotographer,
  isClient,
}) {

  let location = useLocation();  

  return (
    <div className="app">

        <Header pathName={location.pathname} />
        <NavBar pathName={location.pathname} />

        <Routes>
          <Route path="/" element={ <Home pathName={location.pathname} />} />
          <Route path='login' element={<Login />}  />
          <Route path='contact' element={<Contact />} />
          {shootingPages.map((page, index) => (
            <Route key={index} path={`/seance/${page.slug}`} element={<Page page={page} isShooting={true} isPortfolio={false} isItsMe={false} />} />
          ))}
          {portfolioPages.map((page, index) => (
            <Route key={index} path={`/portfolio/${page.slug}`} element={<Page page={page} isShooting={false} isPortfolio={true} isItsMe={false} />} />
          ))}
          {itsMePage && <Route path='c-est-moi' element={<Page page={itsMePage} isShooting={false} isPortfolio={false} isItsMe={true} />} />}

          {isLogged && isClient && <Route path='tableau-de-bord' element={<Dashboard />} />}
          {isLogged && <Route path='seance/:id' element={<Shooting />} />}
          {isLogged && <Route path='seance/:id/favorites' element={<Favorites />} />}

          {isLogged && <Route path='mon-compte/:id' element={<Account />} />}

          <Route path='temp' element={<ChangeTemporaryPassword />} />


          {isLogged && isPhotographer && <Route path='admin' element={<Admin />} />}
          {isLogged && isPhotographer && <Route path='admin/nouvelle-galerie' element={<NewGallery />} />}
          {isLogged && isPhotographer && <Route path='admin/nouveau-client' element={<NewClient />} />}


          <Route path='*' element={<Navigate to="/" replace />} />

        </Routes>

        <Footer />

    </div>
  );
}

App.propTypes = {
};

App.defaultProps = {
};

