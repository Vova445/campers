export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

export const addToFavorites = (advertId) => {
  return (dispatch, getState) => {
    dispatch({
      type: ADD_TO_FAVORITES,
      payload: advertId,
    });
    const { favorites } = getState();
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };
};

export const removeFromFavorites = (advertId) => {
  return (dispatch, getState) => {
    dispatch({
      type: REMOVE_FROM_FAVORITES,
      payload: advertId,
    });
    const { favorites } = getState();
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };
};
