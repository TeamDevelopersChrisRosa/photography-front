import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles.scss';
import Loading from './../Loading';

export const AddPicture = ({
  setIsLoading,
  isLoading,
  uploadImage,
}) => {

  let {id} = useParams();
 
  let share = false;
  const handleSetShare = (evt) => {
    evt.preventDefault();
    share = evt.target.value;
  }

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
      uploadImage(formData, id, share);
    }

  return (
    <>
        <div>
            <form onSubmit={e => e.preventDefault()}>
                <input type="file" onChange={onChange} />
                <button onClick={handleUpload}>Ajouter</button>
                <label htmlFor="share-select">Rendre publique : </label>
                <select onChange={handleSetShare} name="share" id="share-select">
                  <option value={false}> Non </option>
                  <option value={true}> Oui </option>
                </select>
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