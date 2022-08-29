/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 *  on trouve le shooting voulu dans la liste des shootings
 * @param {Array} shootings - tous les shootings
 * @param {number} searchedId - l'id du shooting recherché
 * @return {Object} - Le shooting trouvé
 */
 export function findShooting(shootings, searchedId) {
    const shooting = shootings.find((testedShooting) => {
      return testedShooting.id === searchedId;
    });
    return shooting;
  }