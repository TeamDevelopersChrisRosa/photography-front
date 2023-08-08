import React from 'react';
import MediaQuery from 'react-responsive';
import { useParams } from 'react-router-dom';
import "yet-another-react-lightbox/styles.css";
import './styles.scss';
import Gallery from '../../containers/Gallery';
import AddPicture from '../../containers/AddPicture';
import Loading from '../Loading';
import { findFavoritesOfShooting } from '../../utils/findFavoritesOfShooting';

import { OverlayTrigger, Popover } from 'react-bootstrap';

export const Shooting = ({
  isClient,
  isPhotographer,
  shooting,
  isLoading,

}) => {

  let {id} = useParams();


  return (
    <>
      {isLoading ? (
          <Loading />
        ) : (
        
          <div className='shooting'>

            <div className='shooting__header'> 
                {isClient &&  <a href='/dashboard' className='myButton'> Tableau de bord</a>}
                {isPhotographer &&  <a href='/admin' className='myButton'> Retour admin</a>}
              
                <div>
                  <h2 className='shooting__header__title'> {shooting.nameOfGallery} - Galerie </h2>
                  <div className='shooting__header__name'> {isPhotographer ? <p>{shooting.client.user.firstName} {shooting.client.user.lastName}</p> : null} </div>
                </div>
                
                <a href={'/shooting/' + id + '/favorites'} className='myButton'> 
                  <OverlayTrigger placement="left" overlay={Popover}>
                    <div className='muButton'> Favorites { findFavoritesOfShooting(shooting) } / {shooting.rate.nbPhotos} </div>
                  </OverlayTrigger>
                </a>

            </div>
            
              {isPhotographer && <AddPicture />}

              <MediaQuery minWidth={769}>
                <Gallery layout={"columns"} columns={3} withFavorites={true} withDelete={true} showFavorites={false} isPortfolio={true} onAdmin={true} />
              </MediaQuery>
              <MediaQuery maxWidth={768}>
                  <Gallery layout={"columns"} columns={1} withFavorites={true} withDelete={true} showFavorites={false} isPortfolio={true} onAdmin={true}/>
              </MediaQuery>

              

          </div>
        )}
    </>
  );
};

Shooting.propTypes = {
};

Shooting.defaultProps = {
};