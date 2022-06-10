import { connect } from 'react-redux';
import Contact from '../../components/Contact';
import { logout } from './../../store/actions/authentification';
import { changeValue } from '../../store/actions/field';


const mapStateToProps = (state, ownProps) => ({
  value: state.field[ownProps.name],
});

const mapDispatchToProps = (dispatch, ownProps) => ({

  onChange: (value) => {
    dispatch(changeValue(ownProps.name, value));
  },

});


export default connect(mapStateToProps, mapDispatchToProps)(Contact);
