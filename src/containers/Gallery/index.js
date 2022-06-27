import { connect } from 'react-redux';
import Gallery from '../../components/Gallery';

import { setIdInFavorite } from '../../store/actions/shooting';


const mapStateToProps = (state, ownProps) => ({
    wantedShooting: state.shooting.wantedShooting,
    favoriteIds: state.shooting['favoriteIds'+state.shooting.wantedShooting.id] || [],
});

const mapDispatchToProps = (dispatch, ownProps) => ({

    setFavorite: (id, shootingId) => {
        dispatch(setIdInFavorite(id, shootingId));
      }
  
});


export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
