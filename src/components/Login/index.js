import React from 'react';
// import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';

import Field from './../Field';

import './styles.scss';

const Login = ({
  changeField,
  handleLogin,
  handleLogout,
  isLogged,
  loggedMessage,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (
    <>
    <MediaQuery minWidth={481}>


      {!isLogged && (
        <div className="login-form">
          <form autoComplete="off" onSubmit={handleSubmit}>

            <Field
              name="firstName"
              placeholder="Prénom"
              onChange={changeField}
              className="login-form-input"
            />

            <Field
              name="password"
              type="password"
              placeholder="Mot de passe"
              onChange={changeField}
              className="login-form-input"
            />
            <button
              type="submit"
              className="login-form-button"

            >
              Connexion
            </button>
          </form>
        </div>
      )}
      </MediaQuery>


      <MediaQuery minWidth={0} maxWidth={480}>
        {isLogged && (
        <div className="logged">
            <p className="logged-message">
              {loggedMessage}
            </p>
            <button
              type="button"
              className="logged-button"
              onClick={handleLogout}
            >
              Déconnexion
            </button>
        </div>
      )}


      {!isLogged && (
        <div className="login-form-mobile">
          <form autoComplete="off" onSubmit={handleSubmit}>

            <Field
              name="firstName"
              placeholder="Prénom"
              onChange={changeField}
              className="login-form-input"
            />

            <Field
              name="password"
              type="password"
              placeholder="Mot de passe"
              onChange={changeField}
              className="login-form-input"
            />
            <button
              type="submit"
              className="login-form-button"

            >
              Connexion
            </button>
          </form>
        </div>
      )}
      </MediaQuery>

    </>
  );
};

// LoginForm.propTypes = {
//   handleLogin: PropTypes.func.isRequired,
//   handleLogout: PropTypes.func.isRequired,
//   isLogged: PropTypes.bool,
//   loggedMessage: PropTypes.string,
// };

// Login.defaultProps = {
//   isLogged: false,
//   loggedMessage: 'Connecté',
// };

export default Login;
