import React from 'react';
import MediaQuery from 'react-responsive';
import { useParams } from 'react-router-dom';
import "yet-another-react-lightbox/styles.css";
import './styles.scss';
import Gallery from '../../containers/Gallery';
import AddPicture from '../../containers/AddPicture';
import { findShooting } from '../../utils/shooting';


export const Shooting = ({
  isClient,
  isPhotographer,
  shootings,

}) => {

  let {id} = useParams();
  let shooting = findShooting(shootings, Number(id));


  return (
    <>
        
      <div className='shooting'>

        <div className='shooting__header'> 
            {isClient &&  <a href='/dashboard' className='myButton'> Tableau de bord</a>}
            {isPhotographer &&  <a href='/admin' className='myButton'> Retour admin</a>}
           
            <h2 className='shooting__header__title'> - {shooting.nameOfGallery} - {isPhotographer ? <p>ajouter le nom du client</p> : null} </h2>
            
            { shooting.favorites ? (
              <a href={'/shooting/' + id + '/favorites'} className='myButton'> Favorites { shooting.favorites.length } / {shooting.rate.nbPhotos} </a>
            ) : ( 
              isClient && (
              <div className='myButton'> Favorites 0 / {shooting.rate.nbPhotos} </div>
            )
            )}
            
            {isPhotographer && <AddPicture />}
        </div>
        
          <MediaQuery minWidth={769}>
            <Gallery gallery={shooting.pictures} layout={"columns"} columns={3} withFavorites={true} withDelete={true}/>
          </MediaQuery>
          <MediaQuery maxWidth={768}>
              <Gallery gallery={shooting.pictures} layout={"columns"} columns={1} withFavorites={true} withDelete={true}/>
          </MediaQuery>

      </div>

      
    </>
  );
};

Shooting.propTypes = {
};

Shooting.defaultProps = {
};