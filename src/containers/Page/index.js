import { connect } from 'react-redux';
import Page from '../../components/Page';


const mapStateToProps = (state, ownProps) => ({
    sharedPictures: state.visitor.sharedPictures,
});

const mapDispatchToProps = (dispatch, ownProps) => ({

  

});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
