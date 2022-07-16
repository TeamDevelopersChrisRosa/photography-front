import { connect } from 'react-redux';
import { App } from '../../components/App';

import { fetchItsMePageOfPhotographer } from '../../store/actions/visitor';


const mapStateToProps = (state, ownProps) => ({
  isLogged: state.auth.isLogged,
  shootingPages: state.visitor.shootingPages,
  portfolioPages: state.visitor.portfolioPages,
  itsMePage: state.visitor.itsMePage,
});

const mapDispatchToProps = (dispatch, ownProps) => ({

    FetchItsMePage: () => {
      dispatch(fetchItsMePageOfPhotographer());
    }

});


export default connect(mapStateToProps, mapDispatchToProps)(App);
