import { connect } from 'react-redux';
import { Login } from '../../components/Login';
import { login, showForgotPasswordForm } from '../../store/actions/authentification';

const mapStateToProps = (state) => (

  console.log('STATE', state),
  {
  showErrorMessage: state.auth.showErrorMessage,
  errorMessage: state.auth.errorMessage,
  isLogged: state.auth.isLogged,
  showForgotPasswordForm: state.auth.showForgotPasswordForm,
  firstConnect: state.auth.client.firstConnect,
  client: state.auth.client,
  photographer: state.auth.photographer,
});

const mapDispatchToProps = (dispatch) => ({

  handleLogin: () => {
    console.log('loginhandle')
    dispatch(login());
  },

  handleForgotPasswordForm: () => {
    dispatch(showForgotPasswordForm());
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
