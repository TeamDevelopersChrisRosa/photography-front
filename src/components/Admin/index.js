import React from 'react';

import './styles.scss';

import Field from '../../containers/Field';

export const Admin = ({
  changeField,
  clients
}) => {

  let clientId = clients[0].id;
  const changeSelectedClient = (evt) => {
    console.log(evt.target.value);
    clientId = evt.target.value;
    return clientId;
  }

  const handleNewGallery = (evt) => {
    evt.preventDefault();
    // addNewGallery();
    console.log('coucou');
  }

  console.log(clientId);


  return (
    <div className='admin'>

      <a href='/newclient' className='myButton mx-auto'> Créer un compte pour un client</a>

      <form autoComplete="off" method="POST" className='newClient__form' onSubmit={handleNewGallery}>

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

        <button
          type="submit"
          className="myButton mx-auto mt-2"

        >
          Créer une galerie photos
        </button>

    </form>

      <table>
        <thead>
            <tr>
                <th>Client</th>
                <th>Galerie photo</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>0</td>
                <td>0</td>
                <td>0</td>
            </tr>
            <tr>
                <td>0</td>
                <td>0</td>
                <td>0</td>
            </tr>
            <tr>
                <td>0</td>
                <td>0</td>
                <td>0</td>
            </tr>
            <tr>
                <td>0</td>
                <td>0</td>
                <td>0</td>
            </tr>
            <tr>
                <td>0</td>
                <td>0</td>
                <td>0</td>
            </tr>
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
