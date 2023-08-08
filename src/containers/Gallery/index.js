import { connect } from 'react-redux';
import { Gallery } from '../../components/Gallery';

import { setFavorite, fetchShooting } from '../../store/actions/shooting';
import { deletePicture, sharePicture } from '../../store/actions/picture';


const mapStateToProps = (state, ownProps) => ({
    isPhotographer: state.auth.isPhotographer,
    isClient: state.auth.isClient,
    gallery: state.shooting.shooting.pictures,
    shooting: state.shooting.shooting,
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
    },

    fetchShooting: (shootingId) => {
        dispatch(fetchShooting(shootingId));
    }
  
});


export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
