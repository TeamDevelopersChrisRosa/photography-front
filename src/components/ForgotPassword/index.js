import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';


import Field from '../../containers/Field';

import './styles.scss';

const ForgotPassword = ({
  handleForgot,
  messageForgot,
  successMessage,
  errorMessage,
  handleForgotPasswordForm,
}) => {
  const location = useLocation();


  useEffect(() => {
    window.scroll(0, 0);
  }, [location]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleForgot();
  };

  const handleForgotPassword = (evt) => {
    evt.preventDefault();    
    handleForgotPasswordForm();
  }

  return (
      <div className="forgotPassword">
          <form autoComplete="off" className="forgotPassword__form" onSubmit={handleSubmit}>

            <p className="">
              {messageForgot && 'Remplissez le formulaire et nous vous enverrons un email vous permettant de réinitialiser votre mot de passe.'}
              {errorMessage && <p className="">Oups! Adresse email inconnue</p>}
              {successMessage && <p className="">Demande envoyée !</p>}
            </p>

            <Field
              name="email"
              placeholder="Adresse Email"
              type="email"
              required
            />
            <button
              type="submit"
              className="myButton mx-auto mt-2 "
            >
              Réinitialiser le mot de passe
            </button>
            <button onClick={handleForgotPassword} className="mySmallButton mx-auto mt-2"> retour </button>
          </form>

        <div className="">
          {/* <div className="backButton__contentButton">
            <button onClick={previousPage} type="button" className="settings__send">Retour</button>
          </div> */}
        </div>
      </div>
  );
};

ForgotPassword.propTypes = {
  successMessage: PropTypes.bool,
  errorMessage: PropTypes.bool,
  messageForgot: PropTypes.bool,
};

ForgotPassword.defaultProps = {
  messageForgot: true,
  successMessage: false,
  errorMessage: false,
};

export default ForgotPassword;