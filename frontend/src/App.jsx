import React from 'react';
import useApplicationData from 'hooks/useApplicationData';
import HomeRoute from 'routes/HomeRoute';

import './App.scss';



const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={state.photoData} 
        topics={state.topicData} 
        toggleFavorite={updateToFavPhotoIds}
        favoritePhotos={state.favoritePhotos}
        onPhotoClick={setPhotoSelected}
        isModalOpen={state.isModalOpen}
        selectedPhoto={state.selectedPhoto}
        onCloseModal={onClosePhotoDetailsModal}
      />
    </div>
  );
}

export default App;
