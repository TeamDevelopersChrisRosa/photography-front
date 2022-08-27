import React from 'react';

import './styles.scss';
//import { imageHeight } from '../../utils/imageSize';

export const AddPicture = ({
  AddPicture
}) => {

  let file = {};
  const handleImageChange = (evt) => {
    evt.preventDefault();
    file = evt.target.files[0];
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
        console.log(sizes);
        AddPicture(file, sizes);
      };
    };
    
  }

  

  return (
    <>
        
      <div className='addPicture'>

      <form autoComplete="off" method="POST" className='addPicture__form' onSubmit={handleNewPicture}>

        <input type="file" accept='image/*' onChange={handleImageChange} />

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