import React from 'react';

import './styles.scss';

import NavBar from '../../containers/NavBar';
import { Header } from './../Header';
import { Footer } from './../Footer';
import Field from '../../containers/Field';

export const Contact = ({
  changeField,
  handleLogin,
}) => {
 /*  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  }; */

  return (
    <>
      {/* <Header /> */}
      {/* <NavBar /> */}

      <div className='contact'>

        
            <div className='contact__text'> Elit irure ea est labore voluptate cillum consectetur laborum enim exercitation proident elit et in. Deserunt voluptate mollit mollit aliquip aliqua. Do eu nulla elit nisi et ullamco tempor laborum. Reprehenderit labore magna aliquip duis cupidatat voluptate ea est nisi cupidatat eiusmod dolor excepteur. Minim aliqua enim fugiat tempor proident et laboris et minim ad. Cupidatat ea ad reprehenderit minim nostrud velit. Cupidatat fugiat aute ex irure voluptate pariatur ut consectetur fugiat sunt.

            Do laboris nulla nulla qui veniam. Et ex aliqua veniam cupidatat reprehenderit officia nulla quis. Aute ipsum quis sit non voluptate dolor. </div>

        
            <form autoComplete="off" method="POST" className='contact__form'>

              <Field
                name="contact-name"
                placeholder="Nom"
                onChange={changeField}
                className="login__form__input"
              />

              <Field
                name="contact-firstname"
                placeholder="Prénom"
                onChange={changeField}
                className="login__form__input"
              />

              <Field
                name="contact-email"
                placeholder="Email"
                onChange={changeField}
                className="login__form__input"
              />

              <textarea
                name="message"
                type="message"
                placeholder="Message"
                onChange={changeField}
                className="login__form__input"
              />

              <button
                type="submit"
                className="myButton mx-auto mt-2"

              >
                Envoyer
              </button>
            </form>
        </div>

      {/* <Footer /> */}
    </>
  );
};

// Contact.propTypes = {
// };

// Contact.defaultProps = {
// };
