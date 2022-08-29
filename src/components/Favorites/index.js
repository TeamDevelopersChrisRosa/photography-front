import React from 'react';
import emailjs from '@emailjs/browser';
import MediaQuery from 'react-responsive'
import { useParams } from 'react-router-dom';
import { findShooting } from '../../utils/shooting';



import './styles.scss';

import Gallery from '../../containers/Gallery';

import './styles.scss';


export const Favorites = ({
  getValidateFavoritesMessage,
  validateFavoritesMessage,
  sendEmailWithFavorites,
  shootings,
  
}) => {

  let {id} = useParams();
  let shooting = findShooting(shootings, Number(id));

  const templateParams = {
    from_name: shooting.client.user.firstName + ' ' + shooting.client.user.lastName,
    to_name: shooting.photographer.user.firstName,
    shooting_nameOfGallery: shooting.nameOfGallery,
    email_of_client: shooting.client.user.email,
    favorites: shooting.favorites.map((photo) => {
      return `${photo.name}`;
    }
    ).join(', '),
  };


  const validateFavorites = () => {

    emailjs.send('service_2vfenrf', 'send_favorites_template', templateParams, 'tL2dfN4vvBegRFqw1')
      .then(function(response) {
        getValidateFavoritesMessage(response.status, shooting.id);
      }, function(error) {
        getValidateFavoritesMessage(error.status, shooting.id);
      });
  }


  return (

    <>
      <div className='favorites'>

      <div className='favorites__header'> 
          <a href={'/shooting/' + id}  className='myButton'> Retour à ma galerie </a>
          <h2 className='favorites__header__title'> - Mes favorites de {shooting.nameOfGallery} - </h2>
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
          <Gallery gallery={shooting.favorites} layout={"columns"} columns={3} withFavorites={false} withDelete={false}/>
        </MediaQuery>
        <MediaQuery maxWidth={768}>
          <Gallery gallery={shooting.favorites} layout={"columns"} columns={1} withFavorites={false} withDelete={false}/>

          </MediaQuery>

          <button className='myButton mx-auto my-3' onClick={() => { if (window.confirm('Cette action va envoyer un mail à la photographe afin de vous permettre de télécharger vos photos, vous ne pourrez donc plus les modifier, êtes-vous sûr(e) ?')) validateFavorites() } }> Valider mes favorites </button>

      </div>
    </>

  )};