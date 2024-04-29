import React from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import PhotoDetailsModal from './PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';


import '../styles/HomeRoute.scss';

const HomeRoute = () => {
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    fetchPhotosByTopic 
  } = useApplicationData();

  return (
    <div className="home-route">
      <TopNavigation topics={state.topicData} favoriteCount={state.favoritePhotos.size}  onTopicClick={fetchPhotosByTopic}/>
      <PhotoList photos={state.photoData} toggleFavorite={updateToFavPhotoIds} favoritePhotos={state.favoritePhotos} onPhotoClick={setPhotoSelected}/>
      {state.isModalOpen && <PhotoDetailsModal onClose={onClosePhotoDetailsModal} photo={state.selectedPhoto} toggleFavorite={updateToFavPhotoIds} favoritePhotos={state.favoritePhotos}/>}
    </div>
  );
};

export default HomeRoute;
