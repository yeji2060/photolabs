import React from "react";
import PhotoListItem from "./PhotoListItem";



import "../styles/PhotoList.scss";


const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {props.map(photo => (
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
