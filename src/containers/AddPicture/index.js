import { connect } from 'react-redux';
import { AddPicture } from '../../components/AddPicture';

import { addNewPicture, setAddedPictureToFalse } from '../../store/actions/picture';



const mapStateToProps = (state, ownProps) => ({
    addedPicture: state.shooting.addedPicture,
    addedPictureMessage: state.shooting.addedPictureMessage,
});

const mapDispatchToProps = (dispatch, ownProps) => ({

    AddPicture: (file, sizes, share) => {
        dispatch(addNewPicture(file, sizes, share));
    },

    setAddedPictureToFalse: () => {
        dispatch(setAddedPictureToFalse());
    }


   
});


export default connect(mapStateToProps, mapDispatchToProps)(AddPicture);
