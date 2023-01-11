import { connect } from 'react-redux';
import { Gallery } from '../../components/Gallery';

import { setFavorite } from '../../store/actions/shooting';
import { deletePicture, sharePicture } from '../../store/actions/picture';


const mapStateToProps = (state, ownProps) => ({
    isPhotographer: state.auth.isPhotographer,
    isClient: state.auth.isClient,
    shootings: state.shooting.shootings,
    shooting: state.shooting,
    favorites: state.shooting.favorites,
});

const mapDispatchToProps = (dispatch, ownProps) => ({

    setFavorite: (pictureId, shootingId) => {
        dispatch(setFavorite(pictureId, shootingId));
    },

    deletePicture: (pictureId) => {
        dispatch(deletePicture(pictureId));
    },

    sharePicture: (pictureId) => {
        dispatch(sharePicture(pictureId));
    }
  
});


export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
