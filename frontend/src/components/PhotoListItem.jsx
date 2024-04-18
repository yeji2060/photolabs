import React from "react";
import PhotoFavButton from './PhotoFavButton'; 

import "../styles/PhotoListItem.scss";



const PhotoListItem = (props) => {
  return (
    // Add the specific class name to ensure styles are applied
    <div className="photo-list__item">
      <h2>{props.photo.username}</h2>
      {/* Apply the user profile and image styles */}
      <img src={props.photo.profile} alt="Profile" className="photo-list__user-profile" />
      <div className="photo-list__user-location">
        <p>Location: {props.photo.location.city}, {props.photo.location.country}</p>
      </div>
      <img src={props.photo.imageSource} alt="Scenic view in Montreal" className="photo-list__image" />
      <PhotoFavButton />
    </div>
  );
};


export default PhotoListItem;
