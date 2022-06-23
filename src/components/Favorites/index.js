import React from 'react';
import emailjs from '@emailjs/browser';


import './styles.scss';

import Header from '../../containers/Header';
import Footer from '../Footer';
import PhotoAlbum from "react-photo-album";

import './styles.scss';


const Favorites = ({
  wantedGallery,
  favoriteIds,
  clientFirstName,
  clientLastName,
  clientEmail,
  getValidateFavoritesMessage,
  validateFavoritesMessage,
  sendEmailWithFavorites,
  
}) => {
  const breakpoints = [4320, 2160, 1080, 640, 384, 256, 128];

  const favorites = [];
  wantedGallery.pictures.map((photo) => {
    favoriteIds.map((id) => {
      if (photo.id === Number(id)) {
        favorites.push(photo);
      }
      return favorites;
    });
    return favorites;
  })

  const photos = favorites.map((photo, index) => {
    const width = photo.width;
    const height = photo.height;
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
          height: breakpointHeight,
        };
      })
    };
  });
  
  const templateParams = {
    from_name: clientFirstName + ' ' + clientLastName,
    to_name: 'Laura', // Change this when we have the photographer in photographer entity
    gallery_name: wantedGallery.name,
    email_of_client: clientEmail,
    favorites: favorites.map((photo) => {
      return `${photo.name}`;
    }
    ).join(', '),

  };


  const validateFavorites = () => {

    emailjs.send('service_2vfenrf', 'send_favorites_template', templateParams, 'tL2dfN4vvBegRFqw1')
      .then(function(response) {
        getValidateFavoritesMessage(response.status, wantedGallery.id);
      }, function(error) {
        getValidateFavoritesMessage(error.status, wantedGallery.id);
      });
  }


  return (

    <>
      <Header />

      <div className='favorites'>

      <div className='favorites__header'> 
          <a href='gallery' className='myButton'> Retour à ma galerie </a>
          <h2 className='favorites__header__title'> - Mes favorites de {wantedGallery.name} - </h2>
          <a href='/dashboard' className='myButton'> Tableau de bord </a>
      </div>

      { sendEmailWithFavorites === true && validateFavoritesMessage !== "" ? (
        <div className="alert alert-success" role="alert">
          { validateFavoritesMessage }
        </div>
      ) : null }
       
       { sendEmailWithFavorites === false && validateFavoritesMessage !== "" ? (
        <div className="alert alert-danger" role="alert">
          { validateFavoritesMessage }
        </div>
      ) : null }
   

        <PhotoAlbum
          layout="columns"
          columns={3}
          photos={photos}
          componentsProps={{ imageProps: { loading: "lazy" } }}
        />

        { sendEmailWithFavorites === false ? (     

          <button className='myButton mx-auto my-3' onClick={() => { if (window.confirm('Cette action va envoyer un mail à la photographe afin de vous permettre de télécharger vos photos, vous ne pourrez donc plus les modifier, êtes-vous sûr(e) ?')) validateFavorites() } }> Valider mes favorites </button>
        ) : null }

      </div>
      
      <Footer />
    </>

  )};


export default Favorites;
