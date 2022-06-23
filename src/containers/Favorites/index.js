import { connect } from 'react-redux';
import Favorites from '../../components/Favorites';

import { getValidateFavoritesMessage } from '../../store/actions/gallery';

const mapStateToProps = (state, ownProps) => ({
  wantedGallery: state.gallery.wantedGallery,
  favoriteIds: state.gallery['favoriteIds'+state.gallery.wantedGallery.id] || [],
  clientFirstName: state.auth.firstName,
  clientLastName: state.auth.lastName,
  clientEmail: state.auth.email,
  validateFavoritesMessage: state.gallery['validateFavoritesMessage'+state.gallery.wantedGallery.id] || '',
  sendEmailWithFavorites: state.gallery['sendEmailWithFavorites'+state.gallery.wantedGallery.id] || false,
});

const mapDispatchToProps = (dispatch, ownProps) => ({

  getValidateFavoritesMessage: (response, galleryId) => {
    dispatch(getValidateFavoritesMessage(response, galleryId));
  }
  
});


export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
