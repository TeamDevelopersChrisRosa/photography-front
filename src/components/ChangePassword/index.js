import React from 'react';
import Field from '../../containers/Field';

import './styles.scss';


const ChangePassword = ({
  changeField,
  updateUser,
  userId,
  oldPassword,
  newPassword,
  confirmPassword,
  ChangePasswordSuccess,
  ChangePasswordError,
  ChangePasswordSuccessMessage,
  ChangePasswordErrorMessage,
  removePasswordMessage
}) => {

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if(newPassword === confirmPassword) {
      updateUser(userId, oldPassword, newPassword);
    } else {
      alert('La confirmation du mot de passe ne correspond pas');
    }
  }

  const handlePasswordMessage = (evt) => {
    evt.preventDefault();
    removePasswordMessage(evt.target.id);
  }
 

  return (

    <div className='changePassword'> 
      <h4> Modifier mon mot de passe </h4>

      { ChangePasswordSuccess === true ? (
        <div className="alert alert-success changePassword__alert">
          <div  role="alert">
            { ChangePasswordSuccessMessage }
            
          </div>
          <div onClick={handlePasswordMessage} id="success"> x </div>
        </div>
      ) : null }
       
       { ChangePasswordError === true ? (
        <div className="alert alert-danger changePassword__alert">
          <div role="alert">
            { ChangePasswordErrorMessage }
          </div>
          <div onClick={handlePasswordMessage} id="error"> x </div>
      </div>
      ) : null }

      <form autoComplete="off" onSubmit={handleSubmit} className="">
          <Field 
          name="oldPassword"
          type="password"
          placeholder="Ancien mot de passe"
          onChange={changeField}
          className="login__form__input"
          />

          <Field 
          name="newPassword"
          type="password"
          placeholder="Nouveau mot de passe"
          onChange={changeField}
          className="login__form__input"
          />

          <Field 
          name="confirmPassword"
          type="password"
          placeholder="Confirmer nouveau mot de passe"
          onChange={changeField}
          className="login__form__input"
          />

          <button type="submit" className="myButton mx-auto mt-3"> Valider </button>

      </form>

    </div>

  )};


export default ChangePassword;
