import React from 'react';

import './styles.scss';

import NavBar from '../../containers/NavBar';
import Header from './../Header';
import Footer from './../Footer';
import Field from '../../containers/Field';

const Contact = ({
  changeField,
  handleLogin,
}) => {
 /*  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  }; */

  return (
    <div className='contact'>
      <Header />
      <NavBar />

      <div className="contact__form">
          <form autoComplete="off" action="mailto:c.baret28@gmail.com" method="POST">

            <div className="d-flex">

              <div className="d-flex flex-column half">
                <Field
                  name="contact-name"
                  placeholder="Nom"
                  onChange={changeField}
                  className="login__form__input half"
                />

                <Field
                  name="contact-firstname"
                  placeholder="Prénom"
                  onChange={changeField}
                  className="login__form__input half"
                />

                <Field
                  name="contact-email"
                  placeholder="Email"
                  onChange={changeField}
                  className="login__form__input half"
                />
              </div>

              <div className="half">
                <p>Elit irure ea est labore voluptate cillum consectetur laborum enim exercitation proident elit et in. Deserunt voluptate mollit mollit aliquip aliqua. Do eu nulla elit nisi et ullamco tempor laborum. Reprehenderit labore magna aliquip duis cupidatat voluptate ea est nisi cupidatat eiusmod dolor excepteur. Minim aliqua enim fugiat tempor proident et laboris et minim ad. Cupidatat ea ad reprehenderit minim nostrud velit. Cupidatat fugiat aute ex irure voluptate pariatur ut consectetur fugiat sunt.

                Do laboris nulla nulla qui veniam. Et ex aliqua veniam cupidatat reprehenderit officia nulla quis. Aute ipsum quis sit non voluptate dolor.

                Aliquip laborum consectetur sint fugiat ea cupidatat ipsum anim eu cillum adipisicing dolore Lorem aliquip. Ut duis pariatur est reprehenderit est excepteur nisi occaecat pariatur pariatur exercitation nisi amet. Consequat id dolor anim ea eiusmod occaecat ex. Adipisicing adipisicing dolor nisi consequat ullamco sunt aliqua. Sunt enim minim eiusmod qui cupidatat aliqua elit amet nostrud enim aliqua. Ipsum fugiat magna sunt velit amet officia mollit qui.</p>
              </div>

            </div>

            <textarea
              name="password"
              type="password"
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

      <Footer />
    </div>
  );
};

// Contact.propTypes = {
// };

// Contact.defaultProps = {
// };

export default Contact;
