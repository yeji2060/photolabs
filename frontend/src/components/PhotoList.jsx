import React from "react";
import PhotoListItem from "./PhotoListItem";

import "../styles/PhotoList.scss";



const PhotoList = ({photos, toggleFavorite, favoritePhotos, onPhotoClick}) => {
  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <li key={photo.id}>
          <PhotoListItem photo={{
            id: photo.id,
            username: photo.user.username,
            profile: photo.user.profile,
            location: photo.location,
            imageSource: photo.urls.regular
          }} 
          toggleFavorite={toggleFavorite}
          isFavorite={favoritePhotos.has(photo.id)}
          onPhotoClick={() => onPhotoClick(photo)}
          />
          
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
