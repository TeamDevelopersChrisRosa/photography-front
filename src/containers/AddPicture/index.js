import { connect } from 'react-redux';
import { AddPicture } from '../../components/AddPicture';

import { addNewPicture, setAddedPictureToFalse } from '../../store/actions/picture';



const mapStateToProps = (state, ownProps) => ({
    addedPicture: state.shooting.addedPicture,
    addedPictureMessage: state.shooting.addedPictureMessage,
    shootings: state.shooting.shootings
});

const mapDispatchToProps = (dispatch, ownProps) => ({

    AddPicture: (picture, share, shootingId) => {
        dispatch(addNewPicture(picture, share, shootingId));
    },

    setAddedPictureToFalse: () => {
        dispatch(setAddedPictureToFalse());
    }


   
});


export default connect(mapStateToProps, mapDispatchToProps)(AddPicture);
