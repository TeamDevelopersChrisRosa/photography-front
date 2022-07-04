import { connect } from 'react-redux';
import Contact from '../../components/Contact';
import { changeValue } from '../../store/actions/field';


const mapStateToProps = (state, ownProps) => ({
  message: state.field.message,
});

const mapDispatchToProps = (dispatch, ownProps) => ({

  changeText: (value, name) => {
    dispatch(changeValue(name, value));
  }


});


export default connect(mapStateToProps, mapDispatchToProps)(Contact);
