import { connect } from 'react-redux';
import NavBar from '../../components/NavBar';

import { fetchAllPagesOfPhotographer } from '../../store/actions/visitor';


const mapStateToProps = (state, ownProps) => ({
    pages: state.visitor.pages,
});

const mapDispatchToProps = (dispatch, ownProps) => ({

    FetchPages: () => {
        dispatch(fetchAllPagesOfPhotographer());
    }

});


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
