import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from './actions';

const initialState = {
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter((id) => id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
