import React from 'react';

import './styles.scss';

import Nav from './../Nav';
import Header from './../Header';
import Footer from './../Footer';

const Contact = () => {

  return (
    <div className='contact'>
      <Header />
      <Nav />

      <div className="contact-form">
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

      <Footer />
    </div>
  );
};

// Contact.propTypes = {
// };

// Contact.defaultProps = {
// };

export default Contact;
