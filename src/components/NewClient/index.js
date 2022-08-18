import React from 'react';

import './styles.scss';
import Field from '../../containers/Field';

export const NewClient = ({
  changeField,
  addNewClient,
  saveRandomPassword,
  newClientPassword
}) => {
  const handleNewClient = (evt) => {
    evt.preventDefault();
    addNewClient();
  }
  const handleGenerateRandomPassword = (evt) => {
    evt.preventDefault();
    const randomPassword = Math.random().toString(36).slice(-8);
    saveRandomPassword(randomPassword);
  }

  return (
      <div className='newClient'>

        <h2 className='newClient__title'> Création d'un compte pour un nouveau client </h2>

        <form autoComplete="off" method="POST" className='newClient__form' onSubmit={handleNewClient}>

        <div class="container">
          <div class="row">
            <div class="col">
            <Field
                name="newClientFirstName"
                placeholder="Prenom"
                onChange={changeField}
                className="newClient__form__input col"
              />
            </div>
            <div class="col">
            <Field
                name="newClientLastName"
                placeholder="Nom"
                onChange={changeField}
                className="newClient__form__input "
              />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <Field
                  name="newClientEmail"
                  placeholder="Email"
                  onChange={changeField}
                  className="newClient__form__input"
                />
            </div>
            <div class="col d-flex">
              <Field
                  name="newClientPassword"
                  placeholder="Password"
                  onChange={changeField}
                  className="newClient__form__input"
                  value={newClientPassword}
                />
                <button onClick={handleGenerateRandomPassword} className="mySmallButton ms-2 my-auto"> Générer un mot de passe aléatoire </button>
            </div>
          </div>
          <div class="row">
            <Field
                name="newClientAddress"
                placeholder="Adresse"
                onChange={changeField}
                className="newClient__form__input"
              />
          </div>
          <div class="row">
            <div class="col">
              <Field
                  name="newClientPostalCode"
                  placeholder="Code postal"
                  onChange={changeField}
                  className="newClient__form__input"
                />
            </div>
            <div class="col">
              <Field
                  name="newClientCity"
                  placeholder="Ville"
                  onChange={changeField}
                  className="newClient__form__input"
                />
            </div>
            <div class="col">
              <Field
                  name="newClientCountry"
                  placeholder="Pays"
                  onChange={changeField}
                  className="newClient__form__input"
                />
            </div>
          </div>
          <div class="row">
            <Field
              name="newClientPhoneNumber"
              placeholder="Numéro de téléphone"
              onChange={changeField}
              className="newClient__form__input"
            />
          </div>
        </div>

          <div className='newClient__form__buttons'>
              <button type="submit" className="myButton newClient__form__buttons__button"> Valider </button>
              <a href='/admin' className='myButton bg-danger newClient__form__buttons__button'> Retour </a>
          </div>

        </form>

      </div>

  );
};

NewClient.propTypes = {
};

// Valeurs par défaut pour les props
NewClient.defaultProps = {
};
