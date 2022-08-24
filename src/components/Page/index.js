import React from 'react';
import nl2br from 'react-nl2br';
import Gallery from '../../containers/Gallery';
import MediaQuery from 'react-responsive'

// import PropTypes from 'prop-types';


import './styles.scss';

export const Page = ({
  page,
  isShooting,
  isPortfolio,
  sharedPictures,
  isItsMe,
}) => {
  
  let sharedPicturesByThemeId = [];
  if(isPortfolio) {
    sharedPictures.map((picture) => {
      if (picture.shooting.themeId === page.theme.id) {
        sharedPicturesByThemeId.push(picture);
      }
      return sharedPicturesByThemeId;
    })
  }


  return (
    <>

    <div className='page'>
      <div className='page__title'>{page.title}</div>
        {isShooting || isItsMe ? (
          <div className='page__content'>
            <img src={'/images/'+page.picture.name} alt={page.title} className='page__content__image'/>
            <div>
              <p className='page__content__description'>{nl2br(page.description)}</p>
              {isShooting ? (
              <div className='page__content__prices'> 
                  <h3> Tarifs : </h3>
                  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales purus in dolor dignissim </p>
                  {page.theme.rates.sort((a, b) => a.nbPhotos - b.nbPhotos).map((rate, index) => (
                    <div key={index}>
                      <div className='page__content__prices__price'><b>{rate.nbPhotos}</b> photos : <b>{rate.price} €</b></div>
                    </div>
                  ))}
              </div> 
              ) : null}  
              
            </div>
          </div>

          ) : null 
          }
        

        {isPortfolio ? (
          <div >
            <MediaQuery minWidth={769}>
              <Gallery gallery={sharedPicturesByThemeId} layout={"columns"} columns={3} />
            </MediaQuery>
              <MediaQuery maxWidth={768}>
            <Gallery gallery={sharedPicturesByThemeId} layout={"columns"} columns={1} />
            </MediaQuery>
          </div>
        ) : null}
     
      

      </div>
   
      </>
  );
};

Page.propTypes = {
};

// Valeurs par défaut pour les props
Page.defaultProps = {
};

