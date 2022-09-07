import React from 'react';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './styles.scss';


export const Dashboard = ({
  isLogged,
  shootings,
  firstConnect
}) => {

  let navigate = useNavigate();

  const handleChangeShooting = (evt) => {
    evt.preventDefault();
    navigate(`/shooting/${evt.target.id}`);
  }

  return (
    <>
    <div className='dashboard'>

    { firstConnect
            && (
              <Navigate to={`/temp`} />
          )}

      {isLogged ? (
        <>
        <p className='dashboard__title'> Mes galeries photos : </p>
        <div className='dashboard__galleries'>
          {shootings.map((shooting) => (
              <div key={shooting.id} className='dashboard__gallery' >
                {shooting.pictures.length > 0 ? (
                  <>
                    <img src={`/images/${shooting.pictures[0].name}`} alt={shooting.pictures[0].name} className='dashboard__gallery__picture' onClick={handleChangeShooting} id={shooting.id}/>
                    <p onClick={handleChangeShooting} id={shooting.id} className='dashboard__gallery__name'> {shooting.nameOfGallery} </p>
                  </>
                ) : (
                  <p> {shooting.nameOfGallery} - pas d'images </p>
                )}
              </div>
          ))
          }
        </div>
        </>
      ) : (
        <p>Vous n'êtes pas connecté</p>
      )}
    </div>


    </>
  );
};

Dashboard.propTypes = {
};

Dashboard.defaultProps = {
};
