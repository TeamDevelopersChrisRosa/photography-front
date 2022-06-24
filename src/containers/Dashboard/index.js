import { connect } from 'react-redux';
import Dashboard from '../../components/Dashboard';

import { setWantedShooting } from '../../store/actions/shooting';


const mapStateToProps = (state, ownProps) => ({
  isLogged: state.auth.isLogged,
  shootings: state.shooting.shootings,
  wantedShooting: state.shooting.wantedShooting
  
});

const mapDispatchToProps = (dispatch, ownProps) => ({

  setWantedShooting: (shootingId) => {
    dispatch(setWantedShooting(shootingId));
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);