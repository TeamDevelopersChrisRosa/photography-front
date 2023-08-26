import React, { useEffect } from 'react';
import MediaQuery from 'react-responsive';
import { useParams } from 'react-router-dom';
import "yet-another-react-lightbox/styles.css";
import './styles.scss';
import Gallery from '../../containers/Gallery';
import AddPicture from '../../containers/AddPicture';
import Loading from '../Loading';
import { findFavoritesOfShooting } from '../../utils/findFavoritesOfShooting';

export const Shooting = ({
  isClient,
  isPhotographer,
  shooting,
  isLoading,
  fetchShooting,

}) => {

  let {id} = useParams();

  useEffect(() => {
    fetchShooting(id);
  }, [
    fetchShooting,
    id,
  ]);

  return (
    <>
      {isLoading ? (
          <Loading />
        ) : (
        
          <div className='shooting'>

            <div className='shooting__header'> 
                {isClient &&  <a href='/tableau-de-bord' className='myButton'> Tableau de bord</a>}
                {isPhotographer &&  <a href='/admin' className='myButton'> Retour admin</a>}
              
                <div>
                  <h2 className='shooting__header__title'> {shooting.nameOfGallery} - Galerie </h2>
                  <div className='shooting__header__name'> {isPhotographer ? <p>{shooting.client.user.firstName} {shooting.client.user.lastName}</p> : null} </div>
                </div>
                
                <a href={'/seance/' + id + '/favorites'} className='myButton'> 
                    <div className='muButton'> Favorites { findFavoritesOfShooting(shooting).length } / {shooting.rate.nbPhotos} </div>
                </a>

            </div>
            
              {isPhotographer && <AddPicture />}

              <MediaQuery minWidth={769}>
                <Gallery layout={"columns"} columns={3} withFavorites={true} showFavorites={false} isPortfolio={false} />
              </MediaQuery>
              <MediaQuery maxWidth={768}>
                  <Gallery layout={"columns"} columns={1} withFavorites={true} showFavorites={false} isPortfolio={false} />
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