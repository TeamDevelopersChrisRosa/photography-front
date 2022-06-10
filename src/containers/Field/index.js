import { connect } from 'react-redux';
import Field from '../../components/Field';
import { changeValue } from '../../store/actions/field';


const mapStateToProps = (state, ownProps) => ({
  value: state.field[ownProps.name],
});

const mapDispatchToProps = (dispatch, ownProps) => ({

  onChange: (value) => {
    dispatch(changeValue(ownProps.name, value));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Field);