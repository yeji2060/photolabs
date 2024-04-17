import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <h2>{sampleDataForPhotoListItem.username}</h2>
      <img src={sampleDataForPhotoListItem.profile} alt="Profile" />
      <p>Location: {sampleDataForPhotoListItem.location.city}, {sampleDataForPhotoListItem.location.country}</p>
      <img src={sampleDataForPhotoListItem.imageSource} alt="Scenic view in Montreal" />
    </div>
  );
};

export default App;
