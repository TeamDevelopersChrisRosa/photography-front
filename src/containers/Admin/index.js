import { connect } from 'react-redux';

import { Admin } from '../../components/Admin';


const mapStateToProps = (state) => ({

  clients: state.user.clients

});

const mapDispatchToProps = (dispatch) => ({



});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
