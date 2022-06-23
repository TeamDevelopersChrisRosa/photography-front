import { connect } from 'react-redux';
import Dashboard from '../../components/Dashboard';

import { setWantedGallery } from '../../store/actions/gallery';


const mapStateToProps = (state, ownProps) => ({
  isLogged: state.auth.isLogged,
  galleries: state.gallery.galleries,
  wantedGallery: state.gallery.wantedGallery
  
});

const mapDispatchToProps = (dispatch, ownProps) => ({

  setWantedGallery: (galleryId) => {
    dispatch(setWantedGallery(galleryId));
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);