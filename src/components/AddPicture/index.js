import React, { useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import './styles.scss';
import Loading from '../Loading';

export const AddPicture = ({
  setIsLoading,
  isLoading,
  uploadImage,
}) => {

  let {id} = useParams();

  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState(0);


    const onChange = (e) => {
      setFiles(e.target.files);
    }
    
    const handleUpload = useCallback(() => {
      setIsLoading();
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append('files', files[i]);
      }
      uploadImage(formData, id, setProgress);
    }, [setIsLoading, files, uploadImage, id]);

    console.log('progress', progress)

  return (
    <>
      <div className='addPicture'>
        <form onSubmit={handleUpload} className='addPicture__form'>
            <input type="file" multiple className='addPicture__form__input' onChange={onChange} />
            <button type='submit' className='addPicture__form__button'>Ajouter</button>
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