import React from "react";

import "../styles/PhotoListItem.scss";



const PhotoListItem = (props) => {
  return (
    <div>
      <h2>{props.photo.username}</h2>
      <img src={props.photo.profile} alt="Profile" />
      <p>Location: {props.photo.location.city}, {props.photo.location.country}</p>
      <img src={props.photo.imageSource} alt="Scenic view in Montreal" />
    </div>
  );
};

export default PhotoListItem;
