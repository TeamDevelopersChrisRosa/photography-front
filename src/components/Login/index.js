import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
// import PropTypes from 'prop-types';

import Field from '../../containers/Field';

import './styles.scss';

const Login = ({
  changeField,
  handleLogin,
  isLogged,
  showErrorMessage,
  errorMessage,
}) => {

  //let navigate = useNavigate();


  const handleSubmit = (evt) => {
    evt.preventDefault()
    handleLogin();
  };


  return (
    <div className='login'>

          { isLogged
            && (
              <Navigate to={`/`} />
          )}
          
          <form autoComplete="off" onSubmit={handleSubmit} className="login__form" >

            <Field
              name="email"
              placeholder="Adresse mail"
              onChange={changeField}
              className="login__form__input"
            />

            <Field
              name="password"
              type="password"
              placeholder="Mot de passe"
              onChange={changeField}
              className="login__form__input"
            />

            {showErrorMessage && (
              <p className="login__form__error">{errorMessage}</p>
            )}

            <button
              type="submit"
              className="login__form__button"
            >
              Connexion
            </button>
        </form>
      </div>
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
