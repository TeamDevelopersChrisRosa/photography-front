import { connect } from 'react-redux';
import { AddPicture } from '../../components/AddPicture';

import { uploadImage, setIsLoading } from '../../store/actions/picture';



const mapStateToProps = (state, ownProps) => ({
    shootings: state.shooting.shootings,
    isLoading: state.shooting.isLoading,
});

const mapDispatchToProps = (dispatch, ownProps) => ({

    uploadImage: (imageSelected, share, shootingId) => {
        dispatch(uploadImage(imageSelected, share, shootingId));
    },

    setIsLoading: () => {
        dispatch(setIsLoading());
    },
   
});


export default connect(mapStateToProps, mapDispatchToProps)(AddPicture);
