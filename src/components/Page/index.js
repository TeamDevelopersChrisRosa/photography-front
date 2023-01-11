import React from 'react';
import nl2br from 'react-nl2br';
import Gallery from '../../containers/Gallery';
import MediaQuery from 'react-responsive'
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";

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

  let myImage = null;
  if (!isPortfolio) {
    // Create a Cloudinary instance and set your cloud name.
    const cld = new Cloudinary({
      cloud: {
        cloudName: process.env.REACT_APP_CLN_CLOUD_NAME,
      }
    });
    // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
    if (page.picture) {
      myImage = cld.image(page.picture.publicId); 
    }
  }


  return (
    <>

    <div className='page'>
      <div className='page__title'>{page.title}</div>
        {isShooting || isItsMe ? (
          <div className='page__content'>
            {page.picture ? (
                <AdvancedImage cldImg={myImage} className='page__content__image' alt={page.picture.name}/>
            ) : (
              <div className='page__content__image__absent'>Image à définir</div>
            )}
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
              <Gallery gallery={sharedPicturesByThemeId} layout={"columns"} columns={3} withDelete={true} isPortfolio={true} onAdmin={false} />
            </MediaQuery>
              <MediaQuery maxWidth={768}>
            <Gallery gallery={sharedPicturesByThemeId} layout={"columns"} columns={1} withDelete={true} isPortfolio={true}  onAdmin={false}/>
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

