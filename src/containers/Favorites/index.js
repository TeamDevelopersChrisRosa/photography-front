import { connect } from 'react-redux';
import { Favorites } from '../../components/Favorites';

import { getValidateFavoritesMessage } from '../../store/actions/shooting';

const mapStateToProps = (state, ownProps) => ({
  shootings: state.shooting.shootings,
});

const mapDispatchToProps = (dispatch, ownProps) => ({

  getValidateFavoritesMessage: (response, shootingId) => {
    dispatch(getValidateFavoritesMessage(response, shootingId));
  }
  
});


export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
