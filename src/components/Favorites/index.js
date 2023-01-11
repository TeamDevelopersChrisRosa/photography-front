import React, { useEffect } from 'react';
import emailjs from '@emailjs/browser';
import MediaQuery from 'react-responsive'
import { useParams } from 'react-router-dom';
import { findFavoritesOfShooting} from '../../utils/findFavoritesOfShooting';

import './styles.scss';

import Gallery from '../../containers/Gallery';

import './styles.scss';


export const Favorites = ({
  getValidateFavoritesMessage,
  validateFavoritesMessage,
  sendEmailWithFavorites,
  shooting,
  fetchShooting,
  isPhotographer
  
}) => {


  let {id} = useParams();

  
  // fetch shooting on first render
  useEffect(() => {
    fetchShooting(id);
  }, [
    fetchShooting,
    id,
  ]);

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

  const favorites = findFavoritesOfShooting(shooting);
  
  

  return (

    <>
      <div className='favorites'>

      <div className='favorites__header'> 
          <a href={'/shooting/' + shooting.id}  className='myButton'> Retour à { isPhotographer ? 'la' : 'ma' } galerie </a>
          <div className='favorites__header__part'>
            <h2 className='shooting__header__title'> {shooting.nameOfGallery} - Favorites </h2>
            <p className='shooting__header__name'> {isPhotographer ? <p>{shooting.client.user.firstName} {shooting.client.user.lastName}</p> : null} </p>
          </div>
          { isPhotographer ? 
            <a href='/admin' className='myButton'> Retour admin </a> 
            : 
            <a href='/dashboard' className='myButton'> Tableau de bord </a>
          }
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
          <Gallery gallery={favorites} layout={"columns"} columns={3} withFavorites={false} withDelete={false} showFavorites={true} />
        </MediaQuery>
        
        <MediaQuery maxWidth={768}>
          <Gallery gallery={favorites} layout={"columns"} columns={1} withFavorites={false} withDelete={false} showFavorites={true}/>
        </MediaQuery>

          <button className='myButton mx-auto my-3' onClick={() => { if (window.confirm('Cette action va envoyer un mail à la photographe afin de vous permettre de télécharger vos photos, vous ne pourrez donc plus les modifier, êtes-vous sûr(e) ?')) validateFavorites() } }> Valider mes favorites </button>

      </div>
    </>

  )};