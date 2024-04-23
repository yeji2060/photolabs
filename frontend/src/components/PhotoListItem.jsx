import React from "react";
import PhotoFavButton from './PhotoFavButton'; 

import "../styles/PhotoListItem.scss";


const PhotoListItem = ({photo, toggleFavorite, isFavorite, onPhotoClick}) => {


  return (
    // Add the specific class name to ensure styles are applied
    <div className="photo-list__item" onClick={onPhotoClick}>
      <h2>{photo.username}</h2>
      {/* Apply the user profile and image styles */}
      <img src={photo.profile} alt="Profile" className="photo-list__user-profile" />
      <div className="photo-list__user-location">
        <p>Location: {photo.location.city}, {photo.location.country}</p>
      </div>
      <img src={photo.imageSource} className="photo-list__image" />
      <PhotoFavButton isActive={isFavorite} toggleFavorite={() => toggleFavorite(photo.id)}/>
    </div>
  );
};


export default PhotoListItem;
