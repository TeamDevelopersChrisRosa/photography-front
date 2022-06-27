import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles.scss';


import Home from './../Home';
import Contact from './../../containers/Contact';
import Login from './../../containers/Login';
import NotFound from './../../components/NotFound';
import Dashboard from '../../containers/Dashboard';
import Shooting from '../../containers/Shooting';
import Favorites from '../../containers/Favorites';
import Page from '../../containers/Page';
import ItsMe from '../../containers/ItsMe';


function App({
  isLogged,
  shootingPages,
  portfolioPages,
  itsMePage,
}) {

  return (
    <div className="app">

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="contact" element={<Contact />} />
        {shootingPages.map((page, index) => (
          <Route key={index} path={`/shooting/${page.slug}`} element={<Page page={page} isShooting={true} isPortfolio={false} isItsMe={false} />} />
        ))}
        {portfolioPages.map((page, index) => (
          <Route key={index} path={`/portfolio/${page.slug}`} element={<Page page={page} isShooting={false} isPortfolio={true} isItsMe={false} />} />
        ))}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="shooting" element={<Shooting />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="its_me" element={<Page page={itsMePage} isShooting={false} isPortfolio={false} isItsMe={true} />} />

        <Route path="*" element={<NotFound />} />


      </Routes>

      



    </div>
  );
}

App.propTypes = {
};

App.defaultProps = {
};

export default App;
