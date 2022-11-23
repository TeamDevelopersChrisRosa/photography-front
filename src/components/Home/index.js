import React from 'react';
import image from './image.jpg';

import './styles.scss';

export const Home = () => {

  return (
    <>
    <div className='home'>
      <img src={image} alt="baby" className='home__image'/>
    </div>


    </>
  )};

Home.propTypes = {
};

Home.defaultProps = {
};

