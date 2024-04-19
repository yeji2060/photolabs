import React from "react";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";


import "../styles/PhotoList.scss";


const PhotoList = () => {
  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <li key={photo.id}>
          <PhotoListItem photo={{
            username: photo.user.username,
            profile: photo.user.profile,
            location: photo.location,
            imageSource: photo.urls.regular
          }} />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
