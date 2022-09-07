import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import './styles.scss';
import { findShooting } from '../../utils/shooting';

export const AddPicture = ({
  AddPicture,
  addedPicture,
  addedPictureMessage,
  setAddedPictureToFalse,
  shootings,
}) => {

  let {id} = useParams();
  let shooting = findShooting(shootings, Number(id));

  const [imageSelected, setImageSelected] = useState();
 
  let share = false;
  const handleSetShare = (evt) => {
    evt.preventDefault();
    share = evt.target.value;
  }

  const uploadImage = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", process.env.REACT_APP_CLN_UPLOAD_PRESET);

    Axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLN_CLOUD_NAME}/image/upload/`,
      formData,
    ).then((response) => {
      console.log(response);
      AddPicture(response.data, share, shooting.id);
    }).catch((error) => {
      console.log(error);
    })
  };

  return (
    <>
        
      <div className='addPicture'>

        {addedPicture && (
            <p> {addedPictureMessage} </p>
        )}

        <form autoComplete="off" method="POST" className='addPicture__form' onSubmit={uploadImage}>
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