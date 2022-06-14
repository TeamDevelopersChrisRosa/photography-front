import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles.scss';


import Home from './../Home';
import Contact from './../../containers/Contact';
import Login from './../../containers/Login';
import NotFound from './../../components/NotFound';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="contact" element={<Contact />} />

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
