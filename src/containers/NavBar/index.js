import { connect } from 'react-redux';
import { NavBar } from '../../components/NavBar';

import { fetchAllShootingPagesOfPhotographer, fetchAllPortfolioPagesOfPhotographer, fetchItsMePageOfPhotographer, fetchSharedPicturesByThemeId } from '../../store/actions/visitor';


const mapStateToProps = (state, ownProps) => ({
    shootingPages: state.visitor.shootingPages,
    portfolioPages: state.visitor.portfolioPages,
    isLogged: state.auth.isLogged,
    isPhotographer: state.auth.isPhotographer,
    isClient: state.auth.isClient,
});

const mapDispatchToProps = (dispatch, ownProps) => ({

    FetchShootingPages: () => {
        dispatch(fetchAllShootingPagesOfPhotographer());
    },

    FetchPortfolioPages: () => {
        dispatch(fetchAllPortfolioPagesOfPhotographer());
    },

    fetchSharedPicturesByThemeId: (themeId) => {
        dispatch(fetchSharedPicturesByThemeId(themeId));
    },

    FetchItsMePage: () => {
        dispatch(fetchItsMePageOfPhotographer());
    },

   


});


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
