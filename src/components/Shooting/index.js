import React from 'react';
import MediaQuery from 'react-responsive'

import "yet-another-react-lightbox/styles.css";

import './styles.scss';

import Gallery from '../../containers/Gallery';

export const Shooting = ({
  isLogged,
  wantedShooting,
  setFavorite,
  favoriteIds,

}) => {

  return (
    <>
        
      <div className='shooting'>

        <div className='shooting__header'> 
            <a href='/dashboard' className='myButton'> Tableau de bord</a>
            <h2 className='shooting__header__title'> - {wantedShooting.nameOfGallery} - </h2>
            <a href='/favorites' className='myButton'> Favorites {favoriteIds.length}/{wantedShooting.rate.nbPhotos} </a>
        </div>

        
          <MediaQuery minWidth={769}>
            <Gallery gallery={wantedShooting.pictures} layout={"columns"} columns={3} withFavorites={true}/>
          </MediaQuery>
          <MediaQuery maxWidth={768}>
              <Gallery gallery={wantedShooting.pictures} layout={"columns"} columns={1} withFavorites={true}/>
          </MediaQuery>

      </div>

      
    </>
  );
};

Shooting.propTypes = {
};

Shooting.defaultProps = {
};