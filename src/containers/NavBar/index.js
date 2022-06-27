import { connect } from 'react-redux';
import NavBar from '../../components/NavBar';

import { fetchAllShootingPagesOfPhotographer, fetchAllPortfolioPagesOfPhotographer, fetchSharedPicturesOfPhotographer, fetchItsMePageOfPhotographer } from '../../store/actions/visitor';


const mapStateToProps = (state, ownProps) => ({
    shootingPages: state.visitor.shootingPages,
    portfolioPages: state.visitor.portfolioPages,
});

const mapDispatchToProps = (dispatch, ownProps) => ({

    FetchShootingPages: () => {
        dispatch(fetchAllShootingPagesOfPhotographer());
    },

    FetchPortfolioPages: () => {
        dispatch(fetchAllPortfolioPagesOfPhotographer());
    },

    getSharedPictures: () => {
        dispatch(fetchSharedPicturesOfPhotographer());
    },

    FetchItsMePage: () => {
        dispatch(fetchItsMePageOfPhotographer());
    }


});


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
