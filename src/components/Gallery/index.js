import React, { useState } from 'react';

import "yet-another-react-lightbox/styles.css";

import './styles.scss';

import Header from '../../containers/Header';
import Footer from '../Footer';
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";

const Gallery = ({
  isLogged,
  wantedGallery,
}) => {

  const [index, setIndex] = useState(-1);

  const breakpoints = [4320, 2160, 1080, 640, 384, 256, 128];

  const photos = wantedGallery.pictures.map((photo, index) => {
    const width = photo.width * 4;
    const height = photo.height * 4;
    return {
      src: `/images/${photo.name}`,
      key: `${index}`,
      width,
      height,
      images: breakpoints.map((breakpoint) => {
        const breakpointHeight = Math.round((height / width) * breakpoint);
        return {
          src: `/images/${photo.name}`,
          width: breakpoint,
          height: breakpointHeight
        };
      })
    };
  });

  const slides = photos.map(({ src, key, width, height, images }) => ({
    src,
    key,
    aspectRatio: width / height,
    srcSet: images?.map((image) => ({
      src: image.src,
      width: image.width
    }))
  }));
  

  return (
    <>
      <Header />

      <div className='gallery'>

        <div className='gallery__header'> 
            <a href='/dashboard' className='myButton'> Tableau de bord</a>
            <h2 className='gallery__header__title'> - {wantedGallery.name} - </h2>
            <a href='/' className='myButton'> Favorites </a>
        </div>

        <PhotoAlbum
          layout="columns"
          columns={3}
          photos={photos}
          targetRowHeight={150}
          onClick={(event, photo, index) => setIndex(index)}
          componentsProps={{ imageProps: { loading: "lazy" } }}
        />

        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={slides}
        />        
        

      </div>
      
      <Footer />
    </>
  );
};

Gallery.propTypes = {
};

Gallery.defaultProps = {
};

export default Gallery;
