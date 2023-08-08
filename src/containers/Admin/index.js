import { connect } from 'react-redux';
import { Admin } from '../../components/Admin';
import { fetchShooting, deleteShooting } from '../../store/actions/shooting';



const mapStateToProps = (state) => ({
  shootings: state.shooting.shootings,
});

const mapDispatchToProps = (dispatch) => ({

  fetchShooting: (shootingId) => {
    dispatch(fetchShooting(shootingId))
  },

  deleteShooting: (shootingId) => {
    dispatch(deleteShooting(shootingId))
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
