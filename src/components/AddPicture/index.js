import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import './styles.scss';
import { findShooting } from '../../utils/shooting';
import Loading from './../Loading';
import SuccessMessage from './../SuccessMessage';

export const AddPicture = ({
  AddPicture,
  addedPicture,
  setAddedPictureToFalse,
  shootings,
  setIsLoading,
  isLoading,
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

  const uploadImage = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    setIsLoading();
    formData.append("file", imageSelected);
    formData.append("upload_preset", process.env.REACT_APP_CLN_UPLOAD_PRESET);

    Axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLN_CLOUD_NAME}/image/upload/`,
      formData,
    ).then((response) => {
      AddPicture(response.data, share, shooting.id);
    }).catch((error) => {
      console.log(error);
    })
  };

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