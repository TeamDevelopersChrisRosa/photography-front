import React, { useState } from 'react';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';


import "yet-another-react-lightbox/styles.css";

import './styles.scss';

export const Gallery = ({
  gallery,
  layout,
  columns,
  withFavorites,
  setFavorite,
  isPhotographer,
  isClient,
  withDelete,
  deletePicture,
  shooting,
  showFavorites

}) => {  
  const [index, setIndex] = useState(-1);

  const breakpoints = [4320, 2160, 1080, 640, 384, 256, 128];


  const photos = gallery.map((photo, index) => {
  const width = photo.width;
  const height = photo.height;
  return {
    src: `https://res.cloudinary.com/${process.env.REACT_APP_CLN_CLOUD_NAME}/image/upload/${photo.publicId}?_a=AJE+xWI0`,
    key: `${index}`,
    width,
    height,
    id: `${photo.id}`,
    isFavorite: photo.isFavorite,
    images: breakpoints.map((breakpoint) => {
      const breakpointHeight = Math.round((height / width) * breakpoint);
      return {
        src: `https://res.cloudinary.com/${process.env.REACT_APP_CLN_CLOUD_NAME}/image/upload/${photo.publicId}?_a=AJE+xWI0`,
        width: breakpoint,
        height: breakpointHeight,
        isFavorite: photo.isFavorite,
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
      <>

      {/* render the favorites only (for the favorites page) */}

      {showFavorites && (
        <div style={{ width: style?.width}}>
        {photo.isFavorite && <img alt={alt} style={{ ...style, width: "100%", padding: 0 }} {...restImageProps} /> }
        {!withFavorites && isClient && (
          <div className='gallery__button' onClick={handleSetFavorite} id={photo.id} > Enlever de mes favorites </div>
        )} 

        {withDelete && isPhotographer && (
          <i className="bi bi-trash gallery__heart" id={photo.id} onClick={handleDeletePicture}></i>
        )}
      </div>
      )}

      {/* render without favorites (for the gallery page) */} 

      <div style={{ width: style?.width}}>
        {!photo.isFavorite && <img alt={alt} style={{ ...style, width: "100%", padding: 0 }} {...restImageProps} /> }
        {withFavorites && isClient && (
          <div className='gallery__button' onClick={handleSetFavorite} id={photo.id}> <i className="bi bi-patch-plus" onClick={handleSetFavorite} id={photo.id}> </i> </div>
        )} 

        {withDelete && isPhotographer && (
          <i className="bi bi-trash gallery__heart" id={photo.id} onClick={handleDeletePicture}></i>
        )}
      </div>
      </>
    );

    const handleSetFavorite = (evt) => {
      setFavorite(evt.target.id, shooting.id);
    }

    const handleDeletePicture = (evt) => {
      deletePicture(evt.target.id);
    }

  return (
    <>
      <div className='gallery'>

        <PhotoAlbum
          layout={layout}
          columns={columns}
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
    </>
  );
};

Gallery.propTypes = {
};

Gallery.defaultProps = {
};