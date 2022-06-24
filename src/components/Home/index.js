import React from 'react';

import './styles.scss';

import Nav from './../Nav';
import Header from './../../containers/Header';
import Footer from './../Footer';

const Home = () => {

  return (
    <>
    <Header />
    <Nav />
    <div className='home'>
      <img src='/images/10.jpeg' alt='home' className='home__picture' />
    </div>

    <Footer />

    </>
  )};

Home.propTypes = {
};

Home.defaultProps = {
};

export default Home;
