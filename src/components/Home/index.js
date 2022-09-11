import React from 'react';
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";

import './styles.scss';

export const Home = () => {

   // Create a Cloudinary instance and set your cloud name.
   const cld = new Cloudinary({
    cloud: {
      cloudName: process.env.REACT_APP_CLN_CLOUD_NAME,
    }
  });

  // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
  const myImage = cld.image('ojsqqwdtnyzhpl2uscuf'); 

   

  return (
    <>
    <div className='home'>
      <AdvancedImage cldImg={myImage} className='home__picture' />
    </div>


    </>
  )};

Home.propTypes = {
};

Home.defaultProps = {
};

