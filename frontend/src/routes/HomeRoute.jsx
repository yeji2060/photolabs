import React, { useCallback, useState } from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';


import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
   // State to track if the photo is favorited or not
   const [favoritePhotos, setFavoritePhotos] = useState(new Set());

   const toggleFavorite = photoId => {
    setFavoritePhotos(prev => {
      const newFavs = new Set(prev);
      if (newFavs.has(photoId)) {
        newFavs.delete(photoId);
      } else {
        newFavs.add(photoId);
      }
      return newFavs;
    });
  };

  return (
    <div className="home-route">
    <TopNavigation topics={props.topics} favoriteCount={favoritePhotos.size}/>
    <PhotoList photos={props.photos} toggleFavorite={toggleFavorite} favoritePhotos={favoritePhotos}/>
    </div>
  );
};

export default HomeRoute;
