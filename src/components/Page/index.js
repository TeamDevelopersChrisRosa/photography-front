import React from 'react';
import nl2br from 'react-nl2br';
import Header from '../../containers/Header';
import NavBar from '../../containers/NavBar';
import Footer from '../Footer';
import Gallery from '../../containers/Gallery';
// import PropTypes from 'prop-types';


import './styles.scss';

const Page = ({
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
    <Header />
    <NavBar />

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
                {page.rates.sort((a, b) => a.nbPhotos - b.nbPhotos).map((rate, index) => (
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
              <Gallery gallery={sharedPicturesByThemeId} layout={"columns"} columns={3} />
          </div>
        ) : null}
     
      

      </div>
    <Footer />
      </>
  );
};

Page.propTypes = {
};

// Valeurs par défaut pour les props
Page.defaultProps = {
};

// == Export
export default Page;
