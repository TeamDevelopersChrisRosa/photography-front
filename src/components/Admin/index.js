import React from 'react';

import './styles.scss';

import Field from '../../containers/Field';


export const Admin = ({
  changeField,
  clients,
  addNewShooting,
  shootings,
  themes,
}) => {

  let clientId = clients[0].id;
  const changeSelectedClient = (evt) => {
    clientId = evt.target.value;
    return clientId;
  }

  let themeId = themes[0].id;
  const changeSelectedTheme = (evt) => {
    themeId = evt.target.value;
    return themeId;
  }

 
  const handleNewShooting = (evt) => {
    evt.preventDefault();
    addNewShooting(clientId, themeId);
  }


  return (

    <div className='admin'>

      <a href='/newclient' className='myButton mx-auto'> Créer un compte pour un client</a>

      <form autoComplete="off" method="POST" className='newClient__form' onSubmit={handleNewShooting}>

        <label htmlFor="client-select">Choisir un client:</label>

        <select onChange={changeSelectedClient} name="clients" id="client-select">

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

        { themes.map((theme) =>
          <option key={theme.id} value={theme.id}> {theme.name} </option>
          ) }
        </select>

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
                <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
          { shootings.map((shooting) =>
          <tr key={shooting.id}>
            <td> {shooting.client.user.firstName} {shooting.client.user.lastName}</td>
            <td> {shooting.nameOfGallery} </td>
            <td> oeil stylo poubelle </td>
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
