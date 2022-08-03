import { connect } from 'react-redux';

import { NewClient } from '../../components/NewClient';

import { addNewUser } from '../../store/actions/user';

const mapStateToProps = (state) => ({


});

const mapDispatchToProps = (dispatch) => ({

  addNewClient: () => {
    dispatch(addNewUser());
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(NewClient);
