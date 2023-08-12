import { connect } from 'react-redux';
import { Page } from '../../components/Page';

import { fetchSharedPicturesByThemeId } from '../../store/actions/visitor';


const mapStateToProps = (state, ownProps) => ({
    portfolioPictures: state.visitor.portfolioPictures,
});

const mapDispatchToProps = (dispatch, ownProps) => ({

    fetchSharedPicturesByThemeId: (themeId) => {
        dispatch(fetchSharedPicturesByThemeId(themeId));
    },
  

});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
