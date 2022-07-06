import React from 'react';
import Header from '../../containers/Header';
import Footer from '../Footer';

import './styles.scss';
import ChangePassword from '../../containers/ChangePassword';

const ChangeTemporaryPassword = () => {

  return (
    <>
    <Header />
      <div className='changeTemporaryPassword'>
        <p className='changeTemporaryPassword__description'>Amet excepteur commodo nulla cupidatat id sit excepteur culpa magna esse. Proident irure esse Lorem dolore sint qui dolore laborum. Labore velit sint nostrud est enim.</p>

       <ChangePassword />

        <a href='/dashboard' className='myButton mx-auto w-25'> Retour tableau de bord</a>

      </div>
    <Footer />
    </>

  );
};

ChangeTemporaryPassword.propTypes = {
};

// Valeurs par défaut pour les props
ChangeTemporaryPassword.defaultProps = {
};

// == Export
export default ChangeTemporaryPassword;
