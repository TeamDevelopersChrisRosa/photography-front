export const FETCH_ALL_SHOOTING_PAGES_OF_PHOTOGRAPHER = 'FETCH_ALL_SHOOTING_PAGES_OF_PHOTOGRAPHER';
export const SAVE_SHOOTING_PAGES = 'SAVE_SHOOTING_PAGES';


export const fetchAllShootingPagesOfPhotographer = () => ({
    type: FETCH_ALL_SHOOTING_PAGES_OF_PHOTOGRAPHER
});

export const saveShootingPages = (pages) => ({
    type: 'SAVE_SHOOTING_PAGES',
    pages,
});



