
import { useReducer } from 'react';

// Define your initial state here
const initialState = {
  favoritePhotos: new Set(),
  isModalOpen: false,
  selectedPhoto: null,
};

// Define the action types as constants
const actionTypes = {
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
  SET_PHOTO_SELECTED: 'SET_PHOTO_SELECTED',
  CLOSE_MODAL: 'CLOSE_MODAL'
};

// Define the reducer function
const applicationReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_FAVORITE:
      const newFavs = new Set(state.favoritePhotos);
      if (newFavs.has(action.payload)) {
        newFavs.delete(action.payload);
      } else {
        newFavs.add(action.payload);
      }
      return { ...state, favoritePhotos: newFavs };

    case actionTypes.SET_PHOTO_SELECTED:
      return { ...state, selectedPhoto: action.payload, isModalOpen: true };

    case actionTypes.CLOSE_MODAL:
      return { ...state, isModalOpen: false };


    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

// Define the custom hook that uses the reducer
const useApplicationData = () => {
  const [state, dispatch] = useReducer(applicationReducer, initialState);

  const updateToFavPhotoIds = (photoId) => {
    dispatch({ type: actionTypes.TOGGLE_FAVORITE, payload: photoId });
  };

  const setPhotoSelected = (photoDetails) => {
    dispatch({ type: actionTypes.SET_PHOTO_SELECTED, payload: photoDetails });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: actionTypes.CLOSE_MODAL });
  };


  // The hook returns the state and the action dispatchers
  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,

  };
};

export default useApplicationData;
