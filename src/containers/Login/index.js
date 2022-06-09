import { connect } from 'react-redux';
import LoginForm from '../../components/Login';
import { login } from '../../store/actions/authentification';

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
  
  handleLogin: () => {
    dispatch(login());
  },
  
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);