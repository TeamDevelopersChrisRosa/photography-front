import { connect } from 'react-redux';
import { Admin } from '../../components/Admin';
import { addNewShooting, deleteShooting, setShootingId } from '../../store/actions/shooting';
import { showRates, setTheme } from '../../store/actions/theme';
import { setClient } from '../../store/actions/user';


const mapStateToProps = (state) => ({

  clients: state.user.clients,
  shootings: state.shooting.shootings,
  themes: state.theme.themes,
  rates: state.theme.rates,
  theme: state.theme.theme,
  client: state.user.client,

});

const mapDispatchToProps = (dispatch) => ({

  addNewShooting : (clientId, themeId, rateId, startDate) => {
    dispatch(addNewShooting(clientId, themeId, rateId, startDate));
  },

  showRates: (themeId) => {
    dispatch(showRates(themeId))
  },

  setTheme: (themeId) => {
    dispatch(setTheme(themeId))
  },

  setClient: (clientId) => {
    dispatch(setClient(clientId))
  },

  deleteShooting: (shootingId) => {
    dispatch(deleteShooting(shootingId))
  },
  
  setShootingId: (shootingId) => {
    dispatch(setShootingId(shootingId))
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
