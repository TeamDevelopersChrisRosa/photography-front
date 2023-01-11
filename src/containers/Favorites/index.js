import { connect } from 'react-redux';
import { Favorites } from '../../components/Favorites';

import { getValidateFavoritesMessage, fetchShooting } from '../../store/actions/shooting';

const mapStateToProps = (state, ownProps) => ({
  shooting: state.shooting,
  isPhotographer: state.auth.isPhotographer,
});

const mapDispatchToProps = (dispatch, ownProps) => ({

  getValidateFavoritesMessage: (response, shootingId) => {
    dispatch(getValidateFavoritesMessage(response, shootingId));
  },

  fetchShooting: (id) => {
    dispatch(fetchShooting(id));
  }
  
});


export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
