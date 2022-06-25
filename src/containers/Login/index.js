import { connect } from 'react-redux';
import Login from '../../components/Login';
import { login, showForgotPasswordForm } from '../../store/actions/authentification';

const mapStateToProps = (state) => ({
  showErrorMessage: state.auth.showErrorMessage,
  errorMessage: state.auth.errorMessage,
  isLogged: state.auth.isLogged,
  showForgotPasswordForm: state.auth.showForgotPasswordForm,
});

const mapDispatchToProps = (dispatch) => ({
  
  handleLogin: () => {
    dispatch(login());
  },

  handleForgotPasswordForm: () => {
    dispatch(showForgotPasswordForm());
  }
  

  
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);