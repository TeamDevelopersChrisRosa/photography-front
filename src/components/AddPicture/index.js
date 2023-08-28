import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles.scss';

export const AddPicture = ({
  uploadImage,
  //isLoading,
  //setIsLoading,
}) => {

    let {id} = useParams();

    const [files, setFiles] = useState([]);
    const [progressBar, setProgressBar] = useState(0);

    const onChange = (e) => {
      setFiles(e.target.files);
    }

    var config = {
      onUploadProgress: function(progressEvent) {
        console.log(progressEvent);
        var percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
        setProgressBar(percentCompleted);
      }
    };
    
    const handleUpload = (e) => {
      e.preventDefault();
      //setIsLoading(true);
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append('files', files[i]);
      }
      uploadImage(formData, id, config);
    };

  return (
    <div>
      <div>
      <div className='addPicture'>
        <form onSubmit={handleUpload} className='addPicture__form'>
            <input type="file" onChange={onChange} multiple />
            <button type='submit'>Ajouter</button>
        </form>
      </div>
        
        {progressBar > 0 &&
          <div className='progress'>
            <div className='progress-bar progress-bar-striped progress-bar-animated' role='progressbar' aria-label='progressbar' aria-valuenow={progressBar} aria-valuemin="0" aria-valuemax="100" style={{width: `${progressBar}%`}}> {progressBar} % </div>
          </div>
        }

        {progressBar === 100 && <div className='alert alert-success' role='alert'>Vos photos ont bien été envoyées !</div>}

      </div>
    </div>
  );
};

AddPicture.propTypes = {
};

AddPicture.defaultProps = {
};