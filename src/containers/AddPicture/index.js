import { connect } from 'react-redux';
import { AddPicture } from '../../components/AddPicture';

import { addNewPicture } from '../../store/actions/picture';


const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({

    AddPicture: (file, sizes) => {
        dispatch(addNewPicture(file, sizes));
    }


   
});


export default connect(mapStateToProps, mapDispatchToProps)(AddPicture);
