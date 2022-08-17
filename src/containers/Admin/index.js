import { connect } from 'react-redux';

import { Admin } from '../../components/Admin';

import { addNewShooting } from '../../store/actions/shooting';




const mapStateToProps = (state) => ({

  clients: state.user.clients,
  shootings: state.shooting.shootings

});

const mapDispatchToProps = (dispatch) => ({

  addNewShooting : (clientId) => {
    dispatch(addNewShooting(clientId))
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
