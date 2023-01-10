import React, { useEffect } from 'react';
import MediaQuery from 'react-responsive';
import { useParams } from 'react-router-dom';
import "yet-another-react-lightbox/styles.css";
import './styles.scss';
import Gallery from '../../containers/Gallery';
import AddPicture from '../../containers/AddPicture';
import Loading from './../Loading';


export const Shooting = ({
  isClient,
  isPhotographer,
  fetchShooting,
  shooting,
  isLoading,

}) => {

  let {id} = useParams();

  
  // fetch shooting on first render
  useEffect(() => {
    fetchShooting(id);
  }, [
    fetchShooting,
    id,
  ]);
  
  // count many pictures in shooting.pictures have isFavorite = true
  const countFavorites = () => {
     let count = 0;
     shooting.pictures.forEach((picture) => {
       if (picture.isFavorite) {
         count++;
       }
     });
      return count;
  };

  let galleryWithoutFavorites = [];
  shooting.pictures.map((photo) => {
    // if photo.isFavorite is false, push it in galleryWithoutFavorites
    if (!photo.isFavorite) {
      galleryWithoutFavorites.push(photo);
    }
    return galleryWithoutFavorites;
  })

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
                
                { shooting.favorites ? (
                  <a href={'/shooting/' + id + '/favorites'} className='myButton'> Favorites { countFavorites() } / {shooting.rate.nbPhotos} </a>
                ) : ( 
                  isClient && (
                  <div className='myButton'> Favorites 0 / {shooting.rate.nbPhotos} </div>
                )
                )}

            </div>
            
              {isPhotographer && <AddPicture />}

              <MediaQuery minWidth={769}>
                <Gallery gallery={galleryWithoutFavorites} layout={"columns"} columns={3} withFavorites={true} withDelete={true} showFavorites={false}/>
              </MediaQuery>
              <MediaQuery maxWidth={768}>
                  <Gallery gallery={galleryWithoutFavorites} layout={"columns"} columns={1} withFavorites={true} withDelete={true} showFavorites={false}/>
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