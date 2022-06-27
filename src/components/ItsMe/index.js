import React from 'react';

import './styles.scss';

import NavBar from '../../containers/NavBar';
import Header from '../../containers/Header';
import Footer from '../Footer';

const ItsMe = () => {

  return (
    <>
    <Header />
    <NavBar />
    <div className='itsme'>
      coucou c'est moi
      
    </div>

    <Footer />

    </>
  )};

ItsMe.propTypes = {
};

ItsMe.defaultProps = {
};

export default ItsMe;
