import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles.scss';


import Home from './../Home';
import Login from './../Login';
import Contact from './../Contact';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="contact" element={<Contact />} />

      </Routes>


    </div>
  );
}

App.propTypes = {
};

App.defaultProps = {
};

export default App;
