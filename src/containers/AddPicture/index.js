import { connect } from 'react-redux';
import { AddPicture } from '../../components/AddPicture';

import { uploadImage, setAddedPictureToFalse, setIsLoading } from '../../store/actions/picture';



const mapStateToProps = (state, ownProps) => ({
    addedPicture: state.shooting.addedPicture,
    shootings: state.shooting.shootings,
    isLoading: state.shooting.isLoading,
});

const mapDispatchToProps = (dispatch, ownProps) => ({

    uploadImage: (imageSelected, share, shootingId) => {
        dispatch(uploadImage(imageSelected, share, shootingId));
    },

    setAddedPictureToFalse: () => {
        dispatch(setAddedPictureToFalse());
    },

    setIsLoading: () => {
        dispatch(setIsLoading());
    },
   
});


export default connect(mapStateToProps, mapDispatchToProps)(AddPicture);
