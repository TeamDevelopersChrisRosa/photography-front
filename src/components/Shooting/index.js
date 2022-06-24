import React, { useState } from 'react';

import "yet-another-react-lightbox/styles.css";

import './styles.scss';

import Header from '../../containers/Header';
import Footer from '../Footer';
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";

const Shooting = ({
  isLogged,
  wantedShooting,
  setFavorite,
  favoriteIds,

}) => {

  const [index, setIndex] = useState(-1);

  const breakpoints = [4320, 2160, 1080, 640, 384, 256, 128];

  
    const photos = wantedShooting.pictures.map((photo, index) => {
      const width = photo.width;
      const height = photo.height;
      return {
        src: `/images/${photo.name}`,
        key: `${index}`,
        width,
        height,
        id: `${photo.id}`,
        images: breakpoints.map((breakpoint) => {
          const breakpointHeight = Math.round((height / width) * breakpoint);
          return {
            src: `/images/${photo.name}`,
            width: breakpoint,
            height: breakpointHeight,
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
  

    const renderPhoto = ({ 
      imageProps: { alt, style, ...restImageProps },
      photo
    }) => (
      <div style={{ width: style?.width}}>
          <img alt={alt} style={{ ...style, width: "100%", padding: 0 }} {...restImageProps} />
          <i className={favoriteIds.includes(Number(photo.id)) ? "bi bi-heart-fill shooting__heart text-danger" : "bi bi-heart shooting__heart"} id={photo.id} onClick={handleSetFavorite}></i>
      </div>
    );
  

  const handleSetFavorite = (evt) => {
    setFavorite(evt.target.id, wantedShooting.id);
  }

  return (
    <>
      <Header />
        
      <div className='shooting'>

        <div className='shooting__header'> 
            <a href='/dashboard' className='myButton'> Tableau de bord</a>
            <h2 className='shooting__header__title'> - {wantedShooting.nameOfGallery} - </h2>
            <a href='/favorites' className='myButton'> Favorites {favoriteIds.length}/{wantedShooting.rate.nbPhotos} </a>
        </div>

        <PhotoAlbum
          layout="columns"
          columns={3}
          photos={photos}
          targetRowHeight={150}
          onClick={(event, photo, index) => setIndex(index)}
          componentsProps={{ imageProps: { loading: "lazy" } }}
          renderPhoto={renderPhoto}

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

Shooting.propTypes = {
};

Shooting.defaultProps = {
};

export default Shooting;
