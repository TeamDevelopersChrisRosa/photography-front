import React from 'react';

import './styles.scss';

import Header from '../../containers/Header';
import Footer from '../Footer';

const Dashboard = ({
  isLogged,
  shootings,
  setWantedShooting,
  wantedShooting
}) => {


  const handleChangeShooting = (evt) => {
    console.log(evt.target.id);
    const shooting = shootings.find(shooting => shooting.id === Number(evt.target.id));
    setWantedShooting(shooting.id);
  }

  return (
    <>
    <Header />
    <div className='dashboard'>
      
      {isLogged ? (
        <>
        <p className='dashboard__title'> Mes galeries photos : </p>
        <div className='dashboard__galleries'>
          {shootings.map((shooting) => (
            <>
              { wantedShooting.id === shooting.id ? (
                <div className='dashboard__galleries__selected'>
                  <img src={`/images/${shooting.pictures[0].name}`} alt={shooting.pictures[0].name} className='dashboard__galleries__selected__picture' onClick={handleChangeShooting} id={shooting.id}/>
                  <p className='dashboard__galleries__selected__name'> {shooting.nameOfGallery} </p>
                </div>
              ) : (
                <div className='dashboard__galleries__notSelected'>
                  <img src={`/images/${shooting.pictures[0].name}`} alt={shooting.pictures[0].name} className='dashboard__galleries__notSelected__picture' onClick={handleChangeShooting} id={shooting.id}/>
                  <p className='dashboard__galleries__notSelected__name'> {shooting.nameOfGallery} </p>
                </div>
              )}
              
            </>
          ))}
        </div>

         
        <a href='/shooting' className="myButton mx-auto mt-5 w-25"> Valider </a>
         
          
        </>
      ) : (
        <p>Vous n'êtes pas connecté</p>
      )}
    </div>

    <Footer />

    </>
  );
};

Dashboard.propTypes = {
};

Dashboard.defaultProps = {
};

export default Dashboard;
