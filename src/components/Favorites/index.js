import React from 'react';
import emailjs from '@emailjs/browser';
import MediaQuery from 'react-responsive'


import './styles.scss';

import Header from '../../containers/Header';
import { Footer } from '../Footer';
import Gallery from '../../containers/Gallery';

import './styles.scss';


export const Favorites = ({
  wantedShooting,
  favoriteIds,
  getValidateFavoritesMessage,
  validateFavoritesMessage,
  sendEmailWithFavorites,
  
}) => {

  const favorites = [];
  wantedShooting.pictures.map((photo) => {
    favoriteIds.map((id) => {
      if (photo.id === Number(id)) {
        favorites.push(photo);
      }
      return favorites;
    });
    return favorites;
  })
  
  const templateParams = {
    from_name: wantedShooting.client.user.firstName + ' ' + wantedShooting.client.user.lastName,
    to_name: wantedShooting.photographer.user.firstName,
    shooting_nameOfGallery: wantedShooting.nameOfGallery,
    email_of_client: wantedShooting.client.user.email,
    favorites: favorites.map((photo) => {
      return `${photo.name}`;
    }
    ).join(', '),

  };


  const validateFavorites = () => {

    emailjs.send('service_2vfenrf', 'send_favorites_template', templateParams, 'tL2dfN4vvBegRFqw1')
      .then(function(response) {
        getValidateFavoritesMessage(response.status, wantedShooting.id);
      }, function(error) {
        getValidateFavoritesMessage(error.status, wantedShooting.id);
      });
  }


  return (

    <>
      {/* <Header /> */}

      <div className='favorites'>

      <div className='favorites__header'> 
          <a href='shooting' className='myButton'> Retour à ma galerie </a>
          <h2 className='favorites__header__title'> - Mes favorites de {wantedShooting.nameOfGallery} - </h2>
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

        <MediaQuery minWidth={769}>
          <Gallery gallery={favorites} layout={"columns"} columns={3} withFavorites={false}/>
        </MediaQuery>
        <MediaQuery maxWidth={768}>
          <Gallery gallery={favorites} layout={"columns"} columns={1} withFavorites={false}/>

          </MediaQuery>

        
        { sendEmailWithFavorites === false ? (     

          <button className='myButton mx-auto my-3' onClick={() => { if (window.confirm('Cette action va envoyer un mail à la photographe afin de vous permettre de télécharger vos photos, vous ne pourrez donc plus les modifier, êtes-vous sûr(e) ?')) validateFavorites() } }> Valider mes favorites </button>
        ) : null }

      </div>
      
     {/*  <Footer /> */}
    </>

  )};