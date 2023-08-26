import { connect } from 'react-redux';
import { AddPicture } from '../../components/AddPicture';

import { uploadImage, setIsLoading } from '../../store/actions/picture';



const mapStateToProps = (state, ownProps) => ({
    isLoading: state.shooting.isLoading,
});

const mapDispatchToProps = (dispatch, ownProps) => ({

    uploadImage: (formData, shootingId) => {
        dispatch(uploadImage(formData, shootingId));
    },

    setIsLoading: () => {
        dispatch(setIsLoading());
    },
   
});


export default connect(mapStateToProps, mapDispatchToProps)(AddPicture);
