export const FETCH_ALL_THEMES = 'FETCH_ALL_THEMES';
export const SAVE_THEMES = 'SAVE_THEMES';
export const SHOW_RATES = 'SHOW_RATES';
export const SET_THEME = 'SET_THEME';

export const fetchAllThemes = () => ({
    type: 'FETCH_ALL_THEMES',
});

export const saveThemes = (themes) => ({
    type: 'SAVE_THEMES',
    themes
});

export const showRates = (themeId) => ({
    type: 'SHOW_RATES',
    themeId
});

export const setTheme = (themeId) => ({
    type: 'SET_THEME',
    themeId
});