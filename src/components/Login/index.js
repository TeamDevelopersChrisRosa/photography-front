import React from 'react';
import { Navigate } from 'react-router-dom';
// import PropTypes from 'prop-types';

import Field from '../../containers/Field';
import Header from '../../containers/Header';
import Footer from '../../components/Footer';

import './styles.scss';

const Login = ({
  changeField,
  handleLogin,
  isLogged,
  showErrorMessage,
  errorMessage,
}) => {

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

          <Header />
          
          <form autoComplete="off" onSubmit={handleSubmit} className="login__form" >

          <p> Incididunt nulla laboris pariatur elit esse dolore. Nostrud voluptate consequat dolor consequat exercitation. Ea veniam dolor quis exercitation fugiat elit et laboris laboris irure labore proident.</p>

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
              className="myButton mx-auto mt-5"
            >
              Connexion
            </button>
        </form>

        <Footer />
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
