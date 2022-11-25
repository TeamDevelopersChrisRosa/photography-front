import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles.scss';
import { findShooting } from '../../utils/shooting';
import Loading from './../Loading';

export const AddPicture = ({
  shootings,
  setIsLoading,
  isLoading,
  uploadImage,
}) => {

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