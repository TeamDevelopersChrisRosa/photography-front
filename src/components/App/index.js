import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles.scss';

import { Home } from './../Home';
import Contact from './../../containers/Contact';
import Login from './../../containers/Login';
import { NotFound } from './../../components/NotFound';
import Dashboard from '../../containers/Dashboard';
import Shooting from '../../containers/Shooting';
import Favorites from '../../containers/Favorites';
import Page from '../../containers/Page';
import Account from '../../containers/Account';
import ChangeTemporaryPassword from '../../containers/ChangeTemporaryPassword';
import NavBar from '../../containers/NavBar';
import Header from '../../containers/Header';
import { Footer } from '../Footer';


export function App({
  isLogged,
  shootingPages,
  portfolioPages,
  itsMePage,
}) {

  return (
    <div className="app">
        <Header />
        <NavBar />
        <Routes>
          
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='contact' element={<Contact />} />
          {shootingPages.map((page, index) => (
            <Route key={index} path={`/shooting/${page.slug}`} element={<Page page={page} isShooting={true} isPortfolio={false} isItsMe={false} />} />
          ))}
          {portfolioPages.map((page, index) => (
            <Route key={index} path={`/portfolio/${page.slug}`} element={<Page page={page} isShooting={false} isPortfolio={true} isItsMe={false} />} />
          ))}
          {isLogged && <Route path='dashboard' element={<Dashboard />} />}
          {isLogged && <Route path='shooting' element={<Shooting />} />}
          {isLogged && <Route path='favorites' element={<Favorites />} />}

          {itsMePage && <Route path='its_me' element={<Page page={itsMePage} isShooting={false} isPortfolio={false} isItsMe={true} />} />}
          <Route path='temp' element={<ChangeTemporaryPassword />} />
          {isLogged && (
          <Route path='account/:id' element={<Account />} /> )}

          <Route path='*' element={<NotFound />} />

        </Routes>
        <Footer />

    </div>
  );
}

App.propTypes = {
};

App.defaultProps = {
};

