import React from 'react';
import MediaQuery from 'react-responsive';

import "yet-another-react-lightbox/styles.css";

import './styles.scss';

import Gallery from '../../containers/Gallery';

export const Shooting = ({
  wantedShooting,
  setFavorite,
  favoriteIds,
  isClient,
  isPhotographer,

}) => {


  return (
    <>
        
      <div className='shooting'>

        <div className='shooting__header'> 
        {isClient &&  <a href='/dashboard' className='myButton'> Tableau de bord</a>}
        {isPhotographer &&  <a href='/admin' className='myButton'> Retour admin</a>}
           
            <h2 className='shooting__header__title'> - {wantedShooting.nameOfGallery} - {isPhotographer ? <p>ajouter le nom du client</p> : null }</h2>
            { isClient && <a href='/favorites' className='myButton'> Favorites {favoriteIds.length}/{wantedShooting.rate.nbPhotos} </a> }
            { isPhotographer && <a href='/addpicture' className='myButton'> Ajouter des photos </a> }
        </div>

        
          <MediaQuery minWidth={769}>
            <Gallery gallery={wantedShooting.pictures} layout={"columns"} columns={3} withFavorites={true} withDelete={true}/>
          </MediaQuery>
          <MediaQuery maxWidth={768}>
              <Gallery gallery={wantedShooting.pictures} layout={"columns"} columns={1} withFavorites={true} withDelete={true}/>
          </MediaQuery>

      </div>

      
    </>
  );
};

Shooting.propTypes = {
};

Shooting.defaultProps = {
};