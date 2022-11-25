import { connect } from 'react-redux';

import { NewClient } from '../../components/NewClient';

import { addNewUser, saveRandomPassword } from '../../store/actions/user';

const mapStateToProps = (state) => ({
  newClientPassword: state.field.newClientPassword,
});

const mapDispatchToProps = (dispatch) => ({

  addNewClient: () => {
    dispatch(addNewUser());
  },

  saveRandomPassword : (randomPassword) => {
    dispatch(saveRandomPassword(randomPassword))
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(NewClient);
