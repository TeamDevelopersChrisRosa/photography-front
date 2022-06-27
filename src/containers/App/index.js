import { connect } from 'react-redux';
import App from '../../components/App';


const mapStateToProps = (state, ownProps) => ({
  isLogged: state.auth.isLogged,
  shootingPages: state.visitor.shootingPages,
  portfolioPages: state.visitor.portfolioPages,
});

const mapDispatchToProps = (dispatch, ownProps) => ({


});


export default connect(mapStateToProps, mapDispatchToProps)(App);
