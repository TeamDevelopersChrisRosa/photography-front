import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles.scss';


import Home from './../Home';
import Contact from './../../containers/Contact';
import Login from './../../containers/Login';
import NotFound from './../../components/NotFound';
import Dashboard from '../../containers/Dashboard';
import Gallery from '../../containers/Gallery';
import Favorites from '../../containers/Favorites';


function App({
  isLogged,
}) {
  return (
    <div className="App">

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="contact" element={<Contact />} />

        <Route path="dashboard" element={<Dashboard />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="favorites" element={<Favorites />} />

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
