import React from 'react';
import { useNavigate } from 'react-router-dom';
// import PropTypes from 'prop-types';

import Field from '../../containers/Field';

import './styles.scss';

const Login = ({
  changeField,
  handleLogin,
  isLogged,
}) => {

  let navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault()
    handleLogin();
    navigate('/');
  };


  return (
    <div className='login'>
      {!isLogged && (
        <div className="login-form">
          <form autoComplete="off" onSubmit={handleSubmit}>

            <Field
              name="email"
              placeholder="Adresse mail"
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
