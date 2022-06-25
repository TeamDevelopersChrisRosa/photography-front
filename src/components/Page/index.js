import React from 'react';
import Header from '../../containers/Header';
import NavBar from '../../containers/NavBar';
import Footer from '../Footer';
// import PropTypes from 'prop-types';

import './styles.scss';

const Page = ({
  page
}) => {
  
  console.log(page);

  return (
    <>
    <Header />
    <NavBar />

    <div className='page'>
      <div className='page__title'>{page.title}</div>
      <div className='page__content'>
        <img src={'/images/'+page.picture.name} alt={page.title} className='page__content__image'/>
        <div>
          <p className='page__content__description'>{page.description}</p>

          <p> Tarifs : </p>
          {page.rates.map((rate, index) => (
            <div key={index}>
              <p>{rate.nbPhotos} - {rate.price} e</p>
            </div>
          ))}
          </div>
      </div>
     
      

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
