import { connect } from 'react-redux';
import Shooting from '../../components/Shooting';

import { setIdInFavorite } from '../../store/actions/shooting';


const mapStateToProps = (state, ownProps) => ({
  
    isLogged: state.auth.isLogged,
    wantedShooting: state.shooting.wantedShooting,
    // get favoridteIds from the store for this shooting id
    favoriteIds: state.shooting['favoriteIds'+state.shooting.wantedShooting.id] || [],
});

const mapDispatchToProps = (dispatch, ownProps) => ({

  setFavorite: (id, shootingId) => {
    dispatch(setIdInFavorite(id, shootingId));
  }
  
});


export default connect(mapStateToProps, mapDispatchToProps)(Shooting);
