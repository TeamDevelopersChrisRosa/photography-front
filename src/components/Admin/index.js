import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import { useNavigate } from 'react-router-dom';

import './styles.scss';
import "react-datepicker/dist/react-datepicker.css";

import Field from '../../containers/Field';

import { formatDate } from '../../utils/formatDate';
//import { fetchShootingsOfPhotographer } from '../../store/actions/shooting';


export const Admin = ({
  changeField,
  clients,
  addNewShooting,
  shootings,
  themes,
  setTheme,
  theme,
  setClient,
  client,
  deleteShooting,
  setWantedShooting

}) => {

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

  const handleDeleteShooting = (evt) => {
    evt.preventDefault();
    window.confirm('Es tu sûre de vouloir supprimer cette galerie ?') && deleteShooting(evt.target.id);
  }

  let navigate = useNavigate();

  const handleShowShooting = (evt) => {
    setWantedShooting(evt.target.id);
    navigate(`/shooting/${evt.target.id}`);
  }

  return (

    <div className='admin'>

      <a href='/newclient' className='myButton mx-auto'> Créer un compte pour un client</a>

      <form autoComplete="off" method="POST" className='newClient__form' onSubmit={handleNewShooting}>

        <label htmlFor="client-select">Choisir un client:</label>

        <select onChange={changeSelectedClient} name="clients" id="client-select">

          <option> Sélectionner...</option>

            { clients.map((client) =>
              <option key={client.id} value={client.id}>{client.user.firstName} {client.user.lastName}</option>
              ) }
        </select>

        <Field
          name="nameOfGallery"
          placeholder="Nom de la galerie"
          onChange={changeField}
          className="newClient__form__input"
        />

        <select onChange={changeSelectedTheme} name="themes" id="theme-select">

        <option> Sélectionner...</option>

        { themes.map((theme) =>
          <option key={theme.id} value={theme.id}> {theme.name} </option>
          ) }
        </select>

        { theme.rates !== undefined ? (
          <select onChange={changeSelectedRate} name="rates" id="rate-select">
          <option> Sélectionner...</option>

          { theme.rates.map((rate) =>
            <option key={rate.id} value={rate.id}> {rate.nbPhotos} photos, {rate.price} euros </option>
            ) }
          </select>
        ) : null }

        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="dd/MM/yyyy"
          />

        <Field
          name="timeOfShooting"
          placeholder="Heure"
          onChange={changeField}
          className="newClient__form__input"
        />

        <button
          type="submit"
          className="myButton mx-auto mt-2"

        >
          Créer une galerie photos
        </button>


    </form>

      <table className="table">
        <thead>
            <tr>
                <th scope="col">Client</th>
                <th scope="col">Galerie photo</th>
                <th scope="col">Thème</th>
                <th scope="col">Date & heure</th>
                <th scope="col">Nombre de photos et prix</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
          { shootings.sort((a, b) => {
            if (a.createdAt < b.createdAt)
              return 1;
            if (a.createdAt > b.createdAt)
              return -1;
            return 0;
          }).map((shooting) =>
          <tr key={shooting.id}>
            <td> {shooting.client.user.firstName} {shooting.client.user.lastName}</td>
            <td> {shooting.nameOfGallery} </td>
            <td> {shooting.theme.name} </td>
            <td> Le {formatDate(shooting.date)} à {shooting.time} </td>
            <td> {shooting.rate.nbPhotos} photos - {shooting.rate.price} euros </td>
            <td>
              <i id={shooting.id} onClick={handleShowShooting} className="bi bi-eye"></i>
              <i className="bi bi-pencil mx-2"></i>
              <i id={shooting.id} onClick={handleDeleteShooting} className="bi bi-trash3"></i>
            </td>
          </tr>
          )}

        </tbody>
      </table>
    </div>

  );

}



Admin.propTypes = {
};

// Valeurs par défaut pour les props
Admin.defaultProps = {
};
