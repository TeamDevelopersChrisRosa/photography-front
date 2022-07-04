import React from 'react';
import { Navigate } from 'react-router-dom';

import './styles.scss';

import Header from '../../containers/Header';
import Footer from '../Footer';

const Dashboard = ({
  isLogged,
  shootings,
  setWantedShooting,
  wantedShooting,
  firstConnect
}) => {


  const handleChangeShooting = (evt) => {
    const shooting = shootings.find(shooting => shooting.id === Number(evt.target.value));
    setWantedShooting(shooting.id);
  }

  return (
    <>
    <Header />
    <div className='dashboard'>

    { firstConnect
            && (
              <Navigate to={`/temp`} />
          )}

      {isLogged ? (
        <>
        <p className='dashboard__title'> Mes galeries photos : </p>

          <select onChange={handleChangeShooting} className='dashboard__select'>
            <option key={null} value={null} className='dashboard__select__option'> Sélection ... </option>
            {shootings.map((shooting, index) => (
              <option key={index} value={shooting.id} className='dashboard__select__option'>{shooting.nameOfGallery}</option>
            ))}
          </select>

          <a href='/shooting' className="myButton mx-auto mt-5 w-25"> Valider </a>
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
