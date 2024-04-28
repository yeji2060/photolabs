import React from "react";
import PhotoFavButton from './PhotoFavButton';

import "../styles/PhotoListItem.scss";


const PhotoListItem = ({ photo, toggleFavorite, isFavorite, onPhotoClick }) => {


  return (
    // Add the specific class name to ensure styles are applied

    <div className="photo-list__item" >
      <PhotoFavButton isActive={isFavorite} toggleFavorite={() => toggleFavorite(photo.id)} />
      <img src={photo.imageSource} className="photo-list__image" onClick={() => onPhotoClick(photo)} />
      <div className="photo-list__user-details">
        <img src={photo.profile} alt="Profile" className="photo-list__user-profile" />
        <div className="photo-user-info">
          <p><strong>{photo.name}</strong></p>
          <div className="photo-list__user-location">
          <p>Location: {photo.location.city}, {photo.location.country}</p>
        </div>
        </div>
      
      </div>

    </div>
  );
};


export default PhotoListItem;
