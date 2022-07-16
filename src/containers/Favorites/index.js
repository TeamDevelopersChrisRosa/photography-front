import { connect } from 'react-redux';
import { Favorites } from '../../components/Favorites';

import { getValidateFavoritesMessage } from '../../store/actions/shooting';

const mapStateToProps = (state, ownProps) => ({
  wantedShooting: state.shooting.wantedShooting,
  favoriteIds: state.shooting['favoriteIds'+state.shooting.wantedShooting.id] || [] ,
  validateFavoritesMessage: state.shooting['validateFavoritesMessage'+state.shooting.wantedShooting.id] || '',
  sendEmailWithFavorites: state.shooting['sendEmailWithFavorites'+state.shooting.wantedShooting.id] || false,
});

const mapDispatchToProps = (dispatch, ownProps) => ({

  getValidateFavoritesMessage: (response, shootingId) => {
    dispatch(getValidateFavoritesMessage(response, shootingId));
  }
  
});


export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
