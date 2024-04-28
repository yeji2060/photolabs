
import { useState, useCallback } from 'react';

const useApplicationData = () => {
  const [state, setState] = useState({
    favoritePhotos: new Set(),
    isModalOpen: false,
    selectedPhoto: null,
  });

  const updateToFavPhotoIds = useCallback((photoId) => {
    setState((prevState) => {
      const newFavs = new Set(prevState.favoritePhotos);
      if (newFavs.has(photoId)) {
        newFavs.delete(photoId);
      } else {
        newFavs.add(photoId);
      }
      return { ...prevState, favoritePhotos: newFavs };
    });
  }, []);

  const setPhotoSelected = useCallback((photoDetails) => {
    setState((prevState) => ({
      ...prevState,
      selectedPhoto: photoDetails,
      isModalOpen: true,
    }));
  }, []);

  const onClosePhotoDetailsModal = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      isModalOpen: false,
    }));
  }, []);

  return {
    state, // The state object contains all your application state
    updateToFavPhotoIds, // Function to update favorite photos
    setPhotoSelected, // Function to set the selected photo
    onClosePhotoDetailsModal, // Function to close the photo details modal
  };
};

export default useApplicationData;
