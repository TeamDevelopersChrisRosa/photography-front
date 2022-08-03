import React from 'react';

import './styles.scss';

import Field from '../../containers/Field';

export const Admin = ({
  changeField,
}) => {
  }


  return (
      <div className='admin'>

        <form autoComplete="off" method="POST" className='newClient__form' onSubmit={handleNewClient}>

        <button onClick={routeChange} className="mySmallButton"> Créer un compte pour un client </button>

        <div className='newClient__form__inputGroup'>
          <Field
            name="newClientEmail"
            placeholder="Email"
            onChange={changeField}
            className="newClient__form__input"
          />

          <Field
            name="newClientPassword"
            placeholder="Password"
            //onChange={changeField}
            className="newClient__form__input"
            value={newClientPassword}
          />
          <button onClick={handleGenerateRandomPassword} className="mySmallButton"> Générer mot de passe </button>


        </div>

        <div className='newClient__form__inputGroup'>
          <Field
            name="newClientFirstName"
            placeholder="Prenom"
            onChange={changeField}
            className="newClient__form__input"
          />

          <Field
            name="newClientLastName"
            placeholder="Nom"
            onChange={changeField}
            className="newClient__form__input"
          />
        </div>

        <Field
          name="newClientAddress"
          placeholder="Adresse"
          onChange={changeField}
          className="newClient__form__input"
        />

        <div className='newClient__form__inputGroup'>
          <Field
            name="newClientPostalCode"
            placeholder="Code postal"
            onChange={changeField}
            className="newClient__form__input"
          />

          <Field
            name="newClientCity"
            placeholder="Ville"
            onChange={changeField}
            className="newClient__form__input"
          />

          <Field
            name="newClientCountry"
            placeholder="Pays"
            onChange={changeField}
            className="newClient__form__input"
          />
        </div>

        <Field
          name="newClientPhoneNumber"
          placeholder="Numéro de téléphone"
          onChange={changeField}
          className="newClient__form__input"
        />




        <button
          type="submit"
          className="myButton mx-auto mt-2"

        >
          Valider
        </button>
        </form>

      </div>

  );

Admin.propTypes = {
};

// Valeurs par défaut pour les props
Admin.defaultProps = {
};
