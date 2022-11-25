import { connect } from 'react-redux';
import { NewGallery } from '../../components/NewGallery';
import { addNewShooting, setShootingId } from '../../store/actions/shooting';
import { showRates, setTheme } from '../../store/actions/theme';
import { setClient } from '../../store/actions/user';


const mapStateToProps = (state) => ({
  clients: state.user.clients,
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
  
  setShootingId: (shootingId) => {
    dispatch(setShootingId(shootingId))
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(NewGallery);
