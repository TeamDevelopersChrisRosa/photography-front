import { connect } from 'react-redux';
import NavBar from '../../components/NavBar';

import { fetchAllShootingPagesOfPhotographer } from '../../store/actions/visitor';


const mapStateToProps = (state, ownProps) => ({
    pages: state.visitor.pages,
});

const mapDispatchToProps = (dispatch, ownProps) => ({

    FetchShootingPagesPages: () => {
        dispatch(fetchAllShootingPagesOfPhotographer());
    }

});


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
