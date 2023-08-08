import { connect } from 'react-redux';
import { Shooting } from '../../components/Shooting';
import { fetchShooting } from '../../store/actions/shooting';


const mapStateToProps = (state, ownProps) => ({
    isPhotographer: state.auth.isPhotographer,
    isClient: state.auth.isClient,
    shooting: state.shooting.shooting,
    isLoading: state.shooting.isLoading,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchShooting: (id) => {
        dispatch(fetchShooting(id));
      }
});


export default connect(mapStateToProps, mapDispatchToProps)(Shooting);
