import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";

import './styles.scss';
import "react-datepicker/dist/react-datepicker.css";

import Field from '../../containers/Field';

export const NewGallery = ({
  changeField,
  clients,
  addNewShooting,
  themes,
  setTheme,
  theme,
  setClient,
  client,
  fetchClients,

}) => {
  
  // fetch all clients of photographer
  useEffect(() => {
    fetchClients();
  }, [
    fetchClients
  ]);

  const changeSelectedClient = (evt) => {
    evt.preventDefault();
    setClient(evt.target.value);
  }

  const changeSelectedTheme = (evt) => {
    setTheme(evt.target.value);
  }

  let rateId = 0;
  if (theme.rates !== undefined) {
    rateId = theme.rates[0].id; 
  }
  const changeSelectedRate = (evt) => {
    rateId = evt.target.value;
    return rateId;
  }

  const [startDate, setStartDate] = useState(new Date());

  const handleNewShooting = (evt) => {
    evt.preventDefault();
    addNewShooting(client.id, theme.id, rateId, startDate);
  }

  return (

      <div className='newGallery'>

        <h3 className='text-center'> Nouvelle galerie </h3>

          <form autoComplete="off" method="POST" className='newGallery__form' onSubmit={handleNewShooting}>

            <Field
              name="nameOfGallery"
              placeholder="Nom de la galerie"
              onChange={changeField}
              className="newGallery__form__input"
            />

            <div className='newGallery__form__section'>
              <label htmlFor="client-select" className='newGallery__form__section__choice'>Choisir un client :</label>

              <select onChange={changeSelectedClient} name="clients" id="client-select" className='newGallery__newShooting__form__section__select'>

                <option> Sélectionner...</option>

                  { clients.map((client) =>
                    <option key={client.id} value={client.id}>{client.user.firstName} {client.user.lastName}</option>
                    ) }
              </select>
            </div>

            <div className='newGallery__form__section'>

            <label htmlFor="client-select" className='newGallery__form__section__choice'>Choisir un thème :</label>

              <select onChange={changeSelectedTheme} name="themes" id="theme-select">

              <option> Sélectionner...</option>

              { themes.map((theme) =>
                <option key={theme.id} value={theme.id}> {theme.name} </option>
                ) }
              </select>

              { theme.rates !== undefined ? (
                <>
                <label htmlFor="client-select" className='newGallery__form__section__choice'>photos & tarif :</label>
                <select onChange={changeSelectedRate} name="rates" id="rate-select">
                <option> Sélectionner...</option>

                { theme.rates.map((rate) =>
                  <option key={rate.id} value={rate.id}> {rate.nbPhotos} photos, {rate.price} euros </option>
                  ) }
                </select>
                </>
              ) : null }
            </div>

              <p> Date :</p>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="dd/MM/yyyy"
                />

              <p> Heure :</p>

              <Field
                name="timeOfShooting"
                placeholder="Heure"
                onChange={changeField}
                className="newGallery__form__input"
              />
            

            <div className='newClient__form__buttons'>
              <button type="submit" className="myButton newClient__form__buttons__button"> Valider </button>
              <a href='/admin' className='myButton bg-danger newClient__form__buttons__button'> Retour </a>
            </div>

        </form>

      </div>

      
 

  );

}



NewGallery.propTypes = {
};

// Valeurs par défaut pour les props
NewGallery.defaultProps = {
};
