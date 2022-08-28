import React from 'react';

import './styles.scss';
//import { imageHeight } from '../../utils/imageSize';

export const AddPicture = ({
  AddPicture,
  addedPicture,
  addedPictureMessage,
  setAddedPictureToFalse
}) => {

  let file = {};
  const handleImageChange = (evt) => {
    evt.preventDefault();
    file = evt.target.files[0];
    setAddedPictureToFalse();
  }

  let share = false;
  const handleSetShare = (evt) => {
    evt.preventDefault();
    share = evt.target.value;
    console.log(share);
  }

  const handleNewPicture = (evt) => {
    evt.preventDefault();
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      let image = new Image();
      image.src = e.target.result;
      image.onload = (e) => {
        let sizes = {
          width: e.target.width,
          height: e.target.height
        }
        AddPicture(file, sizes, share);
      };
    };
    
  }

  return (
    <>
        
      <div className='addPicture'>

        {addedPicture && (
            <p> {addedPictureMessage} </p>
        )}

        <form autoComplete="off" method="POST" className='addPicture__form' onSubmit={handleNewPicture}>
          <div>
            <input type="file" accept='image/*' onChange={handleImageChange} />
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