import { connect } from 'react-redux';
import { Dashboard } from '../../components/Dashboard';



const mapStateToProps = (state, ownProps) => ({
  isLogged: state.auth.isLogged,
  shootings: state.shooting.shootings,
  firstConnect: state.auth.client.firstConnect

});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
