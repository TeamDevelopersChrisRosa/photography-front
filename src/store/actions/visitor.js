export const FETCH_ALL_PAGES_OF_PHOTOGRAPHER = 'FETCH_ALL_PAGES_OF_PHOTOGRAPHER';
export const SAVE_PAGES = 'SAVE_PAGES';


export const fetchAllPagesOfPhotographer = () => ({
    type: FETCH_ALL_PAGES_OF_PHOTOGRAPHER
});

export const savePages = (pages) => ({
    type: 'SAVE_PAGES',
    pages,
});



