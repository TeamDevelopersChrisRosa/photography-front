import React from 'react';

import './styles.scss';

import Header from '../../containers/Header';
import Footer from '../Footer';

const Dashboard = ({
  isLogged,
  galleries,
  setWantedGallery,
  wantedGallery
}) => {

  console.log(wantedGallery);

  const handleChangeGallery = (evt) => {
    const gallery = galleries.find(gallery => gallery.id === Number(evt.target.value));
    setWantedGallery(gallery.id);
  }

  return (
    <>
    <Header />
    <div className='dashboard'>
      
      {isLogged ? (
        <>
        <p className='dashboard__title'> Mes galeries photos : </p>

          <select onChange={handleChangeGallery} className='dashboard__select'>
            <option key={null} value={null} className='dashboard__select__option'> Sélection ... </option>
            {galleries.map((gallery, index) => (
              <option key={index} value={gallery.id} className='dashboard__select__option'>{gallery.name}</option>
            ))}
          </select>

          <a href='/gallery' className="myButton mx-auto mt-5 w-25"> Valider </a>
        </>
      ) : (
        <p>Vous n'êtes pas connecté</p>
      )}
    </div>

    <Footer />

    </>
  );
};

Dashboard.propTypes = {
};

Dashboard.defaultProps = {
};

export default Dashboard;
