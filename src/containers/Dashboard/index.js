import { connect } from 'react-redux';
import { Dashboard } from '../../components/Dashboard';

import { fetchShooting } from '../../store/actions/shooting';

const mapStateToProps = (state, ownProps) => ({
  isLogged: state.auth.isLogged,
  shootings: state.shooting.shootings,
  firstConnect: state.auth.client.firstConnect,
  shooting: state.shooting.shooting,

});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchShooting: (id) => {
    dispatch(fetchShooting(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
