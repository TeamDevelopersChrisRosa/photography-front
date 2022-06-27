import { connect } from 'react-redux';
import ChangePassword from '../../components/ChangePassword';

import { updateUser } from '../../store/actions/user';

const mapStateToProps = (state) => ({
  userId: state.auth.id,
  oldPassword: state.field.oldPassword,
  newPassword: state.field.newPassword,
  confirmPassword: state.field.confirmPassword,
  ChangePasswordSuccess: state.user.changePasswordSuccess,
  ChangePasswordError: state.user.changePasswordError,
  ChangePasswordSuccessMessage: state.user.changePasswordSuccessMessage,
  ChangePasswordErrorMessage: state.user.changePasswordErrorMessage
  
});

const mapDispatchToProps = (dispatch) => ({
  
  updateUser: (userId, oldPassword, newPassword) => {
    dispatch(updateUser(userId, oldPassword, newPassword));
  }
 
  
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);