export const FETCH_ALL_SHOOTING_PAGES_OF_PHOTOGRAPHER = 'FETCH_ALL_SHOOTING_PAGES_OF_PHOTOGRAPHER';
export const SAVE_SHOOTING_PAGES = 'SAVE_SHOOTING_PAGES';
export const FETCH_ALL_PORTFOLIO_PAGES_OF_PHOTOGRAPHER = 'FETCH_ALL_PORTFOLIO_PAGES_OF_PHOTOGRAPHER';
export const SAVE_PORTFOLIO_PAGES = 'SAVE_PORTFOLIO_PAGES';
export const FETCH_SHARED_PICTURES_OF_PHOTOGRAPHER = 'FETCH_SHARED_PICTURES_OF_PHOTOGRAPHER';
export const SAVE_SHARED_PICTURES = 'SAVE_SHARED_PICTURES';
export const FETCH_ITS_ME_PAGE_OF_PHOTOGRAPHER = 'FETCH_ITS_ME_PAGE_OF_PHOTOGRAPHER';
export const SAVE_ITS_ME_PAGE = 'SAVE_ITS_ME_PAGE';


export const fetchAllShootingPagesOfPhotographer = () => ({
    type: 'FETCH_ALL_SHOOTING_PAGES_OF_PHOTOGRAPHER'
});

export const saveShootingPages = (shootingPages) => ({
    type: 'SAVE_SHOOTING_PAGES',
    shootingPages,
});

export const fetchAllPortfolioPagesOfPhotographer = () => ({
    type: 'FETCH_ALL_PORTFOLIO_PAGES_OF_PHOTOGRAPHER'
})

export const savePortfolioPages = (portfolioPages) => ({
    type: 'SAVE_PORTFOLIO_PAGES',
    portfolioPages,
});

export const fetchSharedPicturesOfPhotographer = () => ({
    type: 'FETCH_SHARED_PICTURES_OF_PHOTOGRAPHER',
});

export const saveSharedPictures = (sharedPictures) => ({
    type: 'SAVE_SHARED_PICTURES',
    sharedPictures,
});

export const fetchItsMePageOfPhotographer = () => ({
    type: 'FETCH_ITS_ME_PAGE_OF_PHOTOGRAPHER',
});

export const saveItsMePage = (itsMePage) => ({
    type: 'SAVE_ITS_ME_PAGE',
    itsMePage,
});