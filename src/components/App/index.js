import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles.scss';


import Home from './../Home';
import Login from './../../containers/Login';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />

      </Routes>


    </div>
  );
}

App.propTypes = {
};

App.defaultProps = {
};

export default App;
