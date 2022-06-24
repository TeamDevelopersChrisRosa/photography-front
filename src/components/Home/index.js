import React from 'react';

import './styles.scss';

import NavBar from './../NavBar';
import Header from './../../containers/Header';
import Footer from './../Footer';

const Home = () => {

  return (
    <>
    <Header />
    <NavBar />
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
