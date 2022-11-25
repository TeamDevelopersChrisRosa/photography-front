import { connect } from 'react-redux';
import { ChangePassword } from '../../components/ChangePassword';

import { updateUser } from '../../store/actions/user';

import { clearError } from '../../store/actions/error';

const mapStateToProps = (state) => ({
  userId: state.auth.id,
  oldPassword: state.field.oldPassword,
  newPassword: state.field.newPassword,
  confirmPassword: state.field.confirmPassword,
  ChangePasswordSuccess: state.user.changePasswordSuccess,
  ChangePasswordSuccessMessage: state.user.changePasswordSuccessMessage,
  error: state.error.error,
  errorMessages: state.error.errorMessages,
  
});

const mapDispatchToProps = (dispatch) => ({
  
  updateUser: (userId, oldPassword, newPassword) => {
    dispatch(updateUser(userId, oldPassword, newPassword));
  },

  clearError: () => {
    dispatch(clearError());
  }

  
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);