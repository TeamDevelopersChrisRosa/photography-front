import { connect } from 'react-redux';
import { App } from '../../components/App';


const mapStateToProps = (state, ownProps) => ({
  isLogged: state.auth.isLogged,
  shootingPages: state.visitor.shootingPages,
  portfolioPages: state.visitor.portfolioPages,
  itsMePage: state.visitor.itsMePage,
  photographer: state.auth.photographer
});

const mapDispatchToProps = (dispatch, ownProps) => ({


});


export default connect(mapStateToProps, mapDispatchToProps)(App);
