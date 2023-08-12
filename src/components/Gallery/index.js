import React, { useState } from 'react';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';

import { findFavoritesOfShooting } from '../../utils/findFavoritesOfShooting';

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
  deletePicture,
  shooting,
  showFavorites,
  sharePicture,
  isPortfolio,
  portfolioPictures
}) => {  

  if (isPortfolio) {
    gallery = portfolioPictures;
  } 

  const [index, setIndex] = useState(-1);

  const breakpoints = [4320, 2160, 1080, 640, 384, 256, 128];
  
  gallery.sort((a, b) => a.id - b.id);

  const photos = gallery.map((photo, index) => {
    //console.log('photo', photo);
    const width = photo.width;
    const height = photo.height;
    const share = photo.share;
    return {
      src: `${photo.secureUrl}`,
      key: `${index}`,
      width,
      height,
      share,
      id: `${photo.id}`,
      images: breakpoints.map((breakpoint) => {
        const breakpointHeight = Math.round((height / width) * breakpoint);
        return {
          src: `${photo.secureUrl}`,
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
  }) => {

    return (      
      <>
        {/* render the favorites only (for the favorites page) */}

        {showFavorites && (
          <div style={{ width: style?.width}}>
          {photo.isFavorite && <img alt={alt} style={{ ...style, width: "100%", padding: 0 }} {...restImageProps} /> }
          {!withFavorites && isClient && (
            <div className='gallery__button' onClick={handleSetFavorite} id={photo.id}> 
              <i className="bi bi-dash-lg gallery__button__icon" id={photo.id}></i> 
              <span className='gallery__button__caption' id={photo.id}> Retirer des favorites </span>
            </div>

          )} 
        </div>
        )}

        {/* render without favorites (for the gallery page) */} 

        <div style={{ width: style?.width}}>
          {!photo.isFavorite && <img alt={alt} style={{ ...style, width: "100%", padding: 0 }} {...restImageProps} /> }
          {withFavorites && isClient && (
            <div className='gallery__button' onClick={handleSetFavorite} id={photo.id}> 
              <i className="bi bi-plus-lg gallery__button__icon" id={photo.id}></i> 
              <span className='gallery__button__caption' id={photo.id}> Ajouter aux favorites </span>
            </div>
          )} 

          { isPhotographer && (
            <div className='gallery__buttons'>
              { !isPortfolio && (
                <div className='gallery__buttons__button' onClick={handleDeletePicture} id={photo.id}> 
                  <i className="bi bi-x-lg gallery__buttons__button__action" id={photo.id}></i> 
                  <span className='gallery__buttons__button__legend' id={photo.id}> Supprimer </span>
                </div>
              )}

              {photo.share ?
                <div className='gallery__buttons__button' onClick={handleSharePicture} id={photo.id}>
                  <i className="bi bi-person-dash gallery__buttons__button__action gallery__buttons__button__action__share" id={photo.id}></i>
                  <span className='gallery__buttons__button__legend' id={photo.id}> Retirer du portfolio </span> 
                </div>
                : 
                <div className='gallery__buttons__button' onClick={handleSharePicture} id={photo.id}>
                  <i className="bi bi-share gallery__buttons__button__action gallery__buttons__button__action__not-share" id={photo.id}></i>
                  <span className='gallery__buttons__button__legend' id={photo.id}> Ajouter au portfolio </span>
                </div>  
                }
                
            </div>
          )}
        </div>
      </>
  )};

  let favorites = [];
  if (!isPortfolio) {
    favorites = findFavoritesOfShooting(shooting);
  }
  const handleSetFavorite = (evt) => {
    // find if picture is already in favorites
    const isFavorite = favorites.find((favorite) => favorite.id === parseInt(evt.target.id));
    if (favorites.length >= shooting.rate.nbPhotos && !isFavorite) {
      alert(`Vous avez atteint le nombre maximum de photos favorites pour ce shooting. Vous pouvez en supprimer une pour en ajouter une nouvelle. Si vous souhaitez plus de photos, veuillez contacter le photographe.`);
    } else {
      setFavorite(evt.target.id, shooting.id);
    }
  }
  

  const handleDeletePicture = (evt) => {
    // TODO : ask for confirmation ?
    deletePicture(evt.target.id, shooting.id);
  }

  const handleSharePicture = (evt) => {
    sharePicture(evt.target.id, shooting.id);
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