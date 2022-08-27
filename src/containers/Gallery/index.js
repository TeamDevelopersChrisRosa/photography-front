import { connect } from 'react-redux';
import { Gallery } from '../../components/Gallery';

import { setIdInFavorite } from '../../store/actions/shooting';
import { deletePicture } from '../../store/actions/picture';


const mapStateToProps = (state, ownProps) => ({
    wantedShooting: state.shooting.wantedShooting,
    favoriteIds: state.shooting['favoriteIds'+state.shooting.wantedShooting.id] || [],
    isPhotographer: state.auth.isPhotographer,
    isClient: state.auth.isClient,
});

const mapDispatchToProps = (dispatch, ownProps) => ({

    setFavorite: (id, shootingId) => {
        dispatch(setIdInFavorite(id, shootingId));
    },

    deletePicture: (pictureId) => {
        dispatch(deletePicture(pictureId));
    },
  
});


export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
