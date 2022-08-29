import { connect } from 'react-redux';
import { Shooting } from '../../components/Shooting';

import { findShooting } from '../../utils/shooting';


const mapStateToProps = (state, ownProps) => ({
    isLogged: state.auth.isLogged,
    isPhotographer: state.auth.isPhotographer,
    isClient: state.auth.isClient,
    shooting: findShooting(state.shooting.shootings, state.shooting.shootingId),
    shootings: state.shooting.shootings,

});

const mapDispatchToProps = (dispatch, ownProps) => ({

  
});


export default connect(mapStateToProps, mapDispatchToProps)(Shooting);
