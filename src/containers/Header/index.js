import { connect } from 'react-redux';
import { Header } from '../../components/Header';
import { logout } from './../../store/actions/authentification'


const mapStateToProps = (state, ownProps) => ({
  isLogged: state.auth.isLogged,
  firstName: state.auth.firstName,
  lastName: state.auth.lastName,
  id: state.auth.id
});

const mapDispatchToProps = (dispatch, ownProps) => ({

logout: () => {
  dispatch(logout())
}

});

export default connect(mapStateToProps, mapDispatchToProps)(Header);