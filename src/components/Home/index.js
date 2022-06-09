import React from 'react';

import './styles.scss';

import Nav from './../Nav';
import Header from './../Header';

const Home = () => {

  return (
    <div className='home'>
      <Header />
      <Nav />
      <p>Home</p>
    </div>
  );
};

Home.propTypes = {
};

Home.defaultProps = {
};

export default Home;
