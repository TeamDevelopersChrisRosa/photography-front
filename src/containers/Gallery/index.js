import { connect } from 'react-redux';
import Gallery from '../../components/Gallery';

import { setIdInFavorite } from '../../store/actions/gallery';


const mapStateToProps = (state, ownProps) => ({
  
    isLogged: state.auth.isLogged,
    wantedGallery: state.gallery.wantedGallery,
    // get favoridteIds from the store for this gallery id
    favoriteIds: state.gallery['favoriteIds'+state.gallery.wantedGallery.id] || [],
});

const mapDispatchToProps = (dispatch, ownProps) => ({

  setFavorite: (id, galleryId) => {
    dispatch(setIdInFavorite(id, galleryId));
  }
  
});


export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
