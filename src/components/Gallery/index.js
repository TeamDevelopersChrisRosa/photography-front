import React from 'react';
import PhotoAlbum from "react-photo-album";

import './styles.scss';

import Header from '../../containers/Header';
import Footer from '../Footer';



const Gallery = ({
  isLogged,
  wantedGallery,
}) => {

  console.log(wantedGallery.pictures);
  
  const photos = wantedGallery.pictures.map((photo) => ({
    src: `/images/${photo.name}`,
    //width: 200,
    //height: 200,
    //type: 'image/jpeg',
}));

  return (
    <>
      <Header />

      <div className='gallery'>

      <PhotoAlbum photos={photos} layout="columns" />

      {/* <img src={require(`../../images/2.jpeg`)} alt='coucou' className="exp__image"/> */}

        {/* {wantedGallery.pictures.length > 0 ? (
          <>
            {wantedGallery.pictures.map((picture) => (
              <div className='gallery__picture' key={picture.id}>
                <img src={require(`../../assets/images/${picture.name}`)} alt={picture.name} />
                <div className='gallery__picture__title'>
                  {picture.name}
                </div>
              </div>
            ))}
          </>
        ) : (
          <p className='gallery__no-pictures'>
            Pas de photos trouvées pour le moment
            </p>
        )} */}


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
