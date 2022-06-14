import { connect } from 'react-redux';
import ForgotPassword from '../../components/ForgotPassword';
import { showForgotPasswordForm, forgot } from '../../store/actions/authentification';


// transforme le state en props
const mapStateToProps = (state) => ({
  errorMessage: state.auth.errorMessage,
  messageForgot: state.auth.messageForgot,
  successMessage: state.auth.successMessage,
});

// transforme la fonction dispatch en props
const mapDispatchToProps = (dispatch) => ({
  
  handleForgot: () => {
    dispatch(forgot());
  },

  handleForgotPasswordForm: () => {
    dispatch(showForgotPasswordForm());
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);