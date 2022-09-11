import { connect } from 'react-redux';
import { AddPicture } from '../../components/AddPicture';

import { addNewPicture, setAddedPictureToFalse, setIsLoading } from '../../store/actions/picture';



const mapStateToProps = (state, ownProps) => ({
    addedPicture: state.shooting.addedPicture,
    shootings: state.shooting.shootings,
    isLoading: state.shooting.isLoading,
});

const mapDispatchToProps = (dispatch, ownProps) => ({

    AddPicture: (picture, share, shootingId) => {
        dispatch(addNewPicture(picture, share, shootingId));
    },

    setAddedPictureToFalse: () => {
        dispatch(setAddedPictureToFalse());
    },

    setIsLoading: () => {
        dispatch(setIsLoading());
    },


   
});


export default connect(mapStateToProps, mapDispatchToProps)(AddPicture);
