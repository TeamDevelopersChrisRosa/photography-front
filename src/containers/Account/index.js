import { connect } from 'react-redux';
import { Account } from '../../components/Account';

const mapStateToProps = (state) => ({
  firstName: state.auth.firstName,
  lastName: state.auth.lastName,
  email: state.auth.email,
  //password: state.auth.password,
  client: state.auth.client,
  
});

const mapDispatchToProps = (dispatch) => ({
  
 
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);