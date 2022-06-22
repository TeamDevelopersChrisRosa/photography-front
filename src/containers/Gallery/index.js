import { connect } from 'react-redux';
import Gallery from '../../components/Gallery';

import { setIdInFavorite } from '../../store/actions/gallery';


const mapStateToProps = (state, ownProps) => ({
  isLogged: state.auth.isLogged,
  wantedGallery: state.gallery.wantedGallery,
  favoriteIds: state.gallery.favoriteIds,
});

const mapDispatchToProps = (dispatch, ownProps) => ({

  setFavorite: (id) => {
    dispatch(setIdInFavorite(id));
  }
  
});


export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
