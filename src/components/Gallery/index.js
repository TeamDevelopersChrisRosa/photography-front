import React, { useState } from 'react';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import { useParams } from 'react-router-dom';

import { findShooting } from '../../utils/shooting';

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
  shootings

}) => {
  const [index, setIndex] = useState(-1);

  const breakpoints = [4320, 2160, 1080, 640, 384, 256, 128];
  
    const photos = gallery.map((photo, index) => {
      const width = photo.width;
      const height = photo.height;
      return {
        src: `https://res.cloudinary.com/${process.env.REACT_APP_CLN_CLOUD_NAME}/image/upload/${photo.path}?_a=AJE+xWI0`,
        key: `${index}`,
        width,
        height,
        id: `${photo.id}`,
        images: breakpoints.map((breakpoint) => {
          const breakpointHeight = Math.round((height / width) * breakpoint);
          return {
            src: `https://res.cloudinary.com/${process.env.REACT_APP_CLN_CLOUD_NAME}/image/upload/${photo.path}?_a=AJE+xWI0`,
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

    let {id} = useParams();
    let shooting = findShooting(shootings, Number(id));


    const renderPhoto = ({ 
      imageProps: { alt, style, ...restImageProps },
      photo
    }) => (
      <div style={{ width: style?.width}}>
          <img alt={alt} style={{ ...style, width: "100%", padding: 0 }} {...restImageProps} />
          {withFavorites && isClient && (
            <i className={shooting.favorites ? (shooting.favorites.find((favorite) => favorite.id === Number(photo.id)) ? "bi bi-heart-fill gallery__heart text-danger" : "bi bi-heart gallery__heart") : "bi bi-heart gallery__heart"} id={photo.id} onClick={handleSetFavorite}></i>
          )}

          {withDelete && isPhotographer && (
            <i className="bi bi-trash gallery__heart" id={photo.id} onClick={handleDeletePicture}></i>
          )}
      </div>
    );

    const handleSetFavorite = (evt) => {
      setFavorite(evt.target.id, shooting.id);
    }

    const handleDeletePicture = (evt) => {
      // find the picture with his id
      let picture = shooting.pictures.find(picture => picture.id === Number(evt.target.id));
      // we need picture.path to delete the picture on cloudinary (picture.path stores the public_id)
      deletePicture(evt.target.id, shooting.id, picture.path);
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