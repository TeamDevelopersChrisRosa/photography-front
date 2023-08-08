import React from 'react';
import { useNavigate } from 'react-router-dom';

import './styles.scss';
import "react-datepicker/dist/react-datepicker.css";

import { formatDate } from '../../utils/formatDate';
import { MenuAdmin } from '../MenuAdmin';


export const Admin = ({
  shootings,
  deleteShooting,
  fetchShooting,

}) => {

  const handleDeleteShooting = (evt) => {
    evt.preventDefault();
    window.confirm('Es tu sûre de vouloir supprimer cette galerie ?') && deleteShooting(evt.target.id);
  }

  let navigate = useNavigate();

  const handleShowShooting = (evt) => {
    fetchShooting(evt.target.id);
    navigate(`/shooting/${evt.target.id}`);
  }

  return (

    <div className='admin'>

      <nav className='admin__menu'>
        <MenuAdmin />
      </nav>

      <section className='admin__right'>
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
                <i id={shooting.id} onClick={handleShowShooting} className="bi bi-pencil me-2"></i>
                <i id={shooting.id} onClick={handleDeleteShooting} className="bi bi-trash3"></i>
              </td>
            </tr>
            )}

          </tbody>
        </table>
      </section>
    </div>

  );

}



Admin.propTypes = {
};

// Valeurs par défaut pour les props
Admin.defaultProps = {
};
