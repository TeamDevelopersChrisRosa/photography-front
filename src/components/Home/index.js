import React from 'react';

import './styles.scss';

import Nav from './../Nav';
import Header from './../Header';
import Footer from './../Footer';

const Home = () => {

  return (
    <div className='home'>
      <Header />
      <Nav />
      <p>Home</p>
      <Footer />
    </div>
  );
};

Home.propTypes = {
};

Home.defaultProps = {
};

export default Home;
