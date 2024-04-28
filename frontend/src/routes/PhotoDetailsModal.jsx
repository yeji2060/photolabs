import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoListItem from 'components/PhotoListItem';

const PhotoDetailsModal = ({ onClose, photo, toggleFavorite, favoritePhotos }) => {
  React.useEffect(() => {
    console.log('Selected Photo Details:', photo); // Log photo details when the modal is opened and the photo prop changes
  }, [photo]);

  //In order to use map, convert object to array
  const similar_photos = photo.similar_photos ? Object.values(photo.similar_photos) : [];


  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="Close symbol" />
      </button>
      <div className="photo-details-content">
        <PhotoListItem photo={{
          id: photo.id,
          username: photo.user.username,
          name: photo.user.name,
          profile: photo.user.profile,
          location: photo.location,
          imageSource: photo.urls.full
        }}
          toggleFavorite={toggleFavorite}
          isFavorite={favoritePhotos.has(photo.id)}
          onPhotoClick={() => onPhotoClick(photo)}
        />
      </div>
      <div className="similar-photos">
        {similar_photos.map(photo => (
          <li key={photo.id}>
            <PhotoListItem photo={{
              id: photo.id,
              username: photo.user.username,
              name: photo.user.name,
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


      </div>


    </div>
  );
};





export default PhotoDetailsModal;
