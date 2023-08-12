import React from 'react';
// import PropTypes from 'prop-types';

import './styles.scss';
import ChangePassword from '../../containers/ChangePassword';

export const Account = ({
  firstName,
  lastName,
  email 
}) => {

  return (
    <>
      <div className='account'>
        <div className='account__informations'> 
          <p> Nom : {lastName}</p>
          <p> Prénom : {firstName}</p>
          <p> Email : {email}</p>
        </div>
       
       <ChangePassword />

        <a href='/tableau-de-bord' className='myButton mx-auto'> Retour tableau de bord</a>
        
      </div>
    </>
    
  );
};

Account.propTypes = {
};

// Valeurs par défaut pour les props
Account.defaultProps = {
};
