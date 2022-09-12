import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
//import Axios from 'axios';
import './styles.scss';
import { findShooting } from '../../utils/shooting';
import Loading from './../Loading';
import SuccessMessage from './../SuccessMessage';

export const AddPicture = ({
  addedPicture,
  setAddedPictureToFalse,
  shootings,
  setIsLoading,
  isLoading,
  uploadImage,
}) => {

  // set addedPicture to false after 5 seconds, to hide the message
  if (addedPicture) {
    setTimeout(() => {
      setAddedPictureToFalse();
    }, 5000);
  }

  let {id} = useParams();
  let shooting = findShooting(shootings, Number(id));

  const [imageSelected, setImageSelected] = useState();
 
  let share = false;
  const handleSetShare = (evt) => {
    evt.preventDefault();
    share = evt.target.value;
  }

  const handleUploadImage = (evt) => {
    evt.preventDefault();
    setIsLoading();
    uploadImage(imageSelected, share, shooting.id);
  }

  return (
    <>
        
      <div className='addPicture'>

        {isLoading && (
          <Loading />
        )}

        {addedPicture && (
            <div> 
              <SuccessMessage
                message="Photo ajoutée avec succès"
              /> 
            </div>
        )}

        <form autoComplete="off" method="POST" className='addPicture__form' onSubmit={handleUploadImage}>
          <div>
            <input type="file" accept='image/*' onChange={(evt) => {
            setImageSelected(evt.target.files[0]) }} />
          </div>
          <label htmlFor="share-select">Rendre publique : </label>
          <select onChange={handleSetShare} name="share" id="share-select">
            <option value={false}> Non </option>
            <option value={true}> Oui </option>
          </select>

          <button
            type="submit"
            className="myButton mx-auto mt-2"
          >
            Ajouter
          </button>
        </form>
      </div>
    </>
  );
};

AddPicture.propTypes = {
};

AddPicture.defaultProps = {
};