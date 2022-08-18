export const FETCH_ALL_THEMES = 'FETCH_ALL_THEMES';
export const SAVE_THEMES = 'SAVE_THEMES';

export const fetchAllThemes = () => ({
    type: 'FETCH_ALL_THEMES',
});

export const saveThemes = (themes) => ({
    type: 'SAVE_THEMES',
    themes
});