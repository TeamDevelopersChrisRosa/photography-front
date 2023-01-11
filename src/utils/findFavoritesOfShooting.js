export const findFavoritesOfShooting = (shooting) => {
    const favorites = shooting.pictures.filter((picture) => picture.isFavorite);
    return favorites;
    };