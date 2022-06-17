import { connect } from 'react-redux';
import Gallery from '../../components/Gallery';


const mapStateToProps = (state, ownProps) => ({
  isLogged: state.auth.isLogged,
  wantedGallery: state.gallery.wantedGallery,
});

const mapDispatchToProps = (dispatch, ownProps) => ({

  
});


export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
