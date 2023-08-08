import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles.scss';
import Loading from '../Loading';

export const AddPicture = ({
  setIsLoading,
  isLoading,
  uploadImage,
}) => {

  let {id} = useParams();
 
  /* let share = false;
  const handleSetShare = (evt) => {
    evt.preventDefault();
    share = evt.target.value;
  } */

  const [file, setFile] = useState();

    const onChange = (file: ChangeEvent) => {
        const { files } = file.target;
        if (files && files.length !== 0) {
          setFile(files[0]);
        }
    }

    const handleUpload = async () => {
      setIsLoading();
      const formData = new FormData();
      formData.append('file', file);
      uploadImage(formData, id, /* share */);
    }

  return (
    <>
      <div className='addPicture'>
        <form onSubmit={e => e.preventDefault()} className='addPicture__form'>
            <input type="file" onChange={onChange} className='addPicture__form__input' />
            <button onClick={handleUpload} className='addPicture__form__button'>Ajouter</button>
        </form>
      </div>
        
      <div className='addPicture'>
        {isLoading && (
          <Loading />
        )}
      </div>
    </>
  );
};

AddPicture.propTypes = {
};

AddPicture.defaultProps = {
};