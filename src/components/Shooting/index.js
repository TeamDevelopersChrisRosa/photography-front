import React from 'react';

import "yet-another-react-lightbox/styles.css";

import './styles.scss';

import Header from '../../containers/Header';
import Footer from '../Footer';
import Gallery from '../../containers/Gallery';

const Shooting = ({
  isLogged,
  wantedShooting,
  setFavorite,
  favoriteIds,

}) => {

  return (
    <>
      <Header />
        
      <div className='shooting'>

        <div className='shooting__header'> 
            <a href='/dashboard' className='myButton'> Tableau de bord</a>
            <h2 className='shooting__header__title'> - {wantedShooting.nameOfGallery} - </h2>
            <a href='/favorites' className='myButton'> Favorites {favoriteIds.length}/{wantedShooting.rate.nbPhotos} </a>
        </div>

        <Gallery gallery={wantedShooting.pictures} layout={"columns"} columns={3} withFavorites={true}/>
        

      </div>

      <Footer />
    </>
  );
};

Shooting.propTypes = {
};

Shooting.defaultProps = {
};

export default Shooting;
