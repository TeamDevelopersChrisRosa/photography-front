import { connect } from 'react-redux';

import { Admin } from '../../components/Admin';

import { addNewShooting } from '../../store/actions/shooting';




const mapStateToProps = (state) => ({

  clients: state.user.clients,
  shootings: state.shooting.shootings,
  themes: state.theme.themes,

});

const mapDispatchToProps = (dispatch) => ({

  addNewShooting : (clientId, themeId) => {
    dispatch(addNewShooting(clientId, themeId))
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
