import React from 'react';

import './styles.scss';
import ChangePassword from '../../containers/ChangePassword';

export const ChangeTemporaryPassword = () => {

  return (
    <>
      <div className='changeTemporaryPassword'>
        <p className='changeTemporaryPassword__description'>Amet excepteur commodo nulla cupidatat id sit excepteur culpa magna esse. Proident irure esse Lorem dolore sint qui dolore laborum. Labore velit sint nostrud est enim.</p>

       <ChangePassword />

        <a href='/dashboard' className='myButton mx-auto w-25'> Retour tableau de bord</a>

      </div>
    </>

  );
};

ChangeTemporaryPassword.propTypes = {
};

// Valeurs par défaut pour les props
ChangeTemporaryPassword.defaultProps = {
};
