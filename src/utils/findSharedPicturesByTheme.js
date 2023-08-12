import axios from "axios";

export function findSharedPicturesByTheme(themeId) {
    // for all pictures, we keep only the ones with the same themeId and who have share = true
    // 1 fetch all pictures
    // 2 filter the ones with the same themeId
    // 3 filter the ones with share = true
    // 4 return the result
    let sharedPicturesByThemeId = [];
    let pictures = axios.get('http://localhost:3000/api/picture')
        .then((response) => {
            const pictures = response.data;
            pictures.filter((picture) => {
                if (picture.shootingId === themeId && picture.share === true) {
                    sharedPicturesByThemeId.push(picture);
                }
            });
        })
        .catch((error) => {
            console.log(error);
        });
    

    return sharedPicturesByThemeId;
}