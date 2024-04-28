import React, { useCallback, useState } from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import PhotoDetailsModal from './PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';


import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal
  } = useApplicationData();

  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} favoriteCount={state.favoritePhotos.size}/>
      <PhotoList photos={props.photos} toggleFavorite={updateToFavPhotoIds} favoritePhotos={state.favoritePhotos} onPhotoClick={setPhotoSelected}/>
      {state.isModalOpen && <PhotoDetailsModal onClose={onClosePhotoDetailsModal} photo={state.selectedPhoto} toggleFavorite={updateToFavPhotoIds} favoritePhotos={state.favoritePhotos}/>}
    </div>
  );
};

export default HomeRoute;
