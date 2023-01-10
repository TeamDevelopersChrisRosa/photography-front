import { connect } from 'react-redux';
import { Gallery } from '../../components/Gallery';

import { setFavorite } from '../../store/actions/shooting';
import { deletePicture } from '../../store/actions/picture';


const mapStateToProps = (state, ownProps) => ({
    isPhotographer: state.auth.isPhotographer,
    isClient: state.auth.isClient,
    shootings: state.shooting.shootings,
    shooting: state.shooting,
});

const mapDispatchToProps = (dispatch, ownProps) => ({

    setFavorite: (pictureId, shootingId) => {
        dispatch(setFavorite(pictureId, shootingId));
    },

    deletePicture: (pictureId) => {
        dispatch(deletePicture(pictureId));
    },
  
});


export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
