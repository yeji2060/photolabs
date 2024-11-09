import React from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({ onClose, photo, toggleFavorite, favoritePhotos }) => {
  React.useEffect(() => { }, [photo]);

  //In order to use map, convert object to array
  const similar_photos = photo.similar_photos ? Object.values(photo.similar_photos) : [];

  return (
    <div className="photo-details-modal">

      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="Close symbol" />
      </button>

      <div className="photo-details-modal__images">
        <div className="photo-details-modal__photographer-details">
          <img src={photo.user.profile} alt="Profile" className="photo-details-modal__photographer-profile" />
          <div className="photo-details-modal__photographer-info">
            <div className="photo-details-modal__photographer-name">
              <p><strong>{photo.user.name}</strong></p>
            </div>
            <div className="photo-details-modal__photographer-location">
              <p>Location: {photo.location.city}, {photo.location.country}</p>
            </div>
          </div>
        </div>

        <PhotoFavButton isActive={favoritePhotos.has(photo.id)} toggleFavorite={() => toggleFavorite(photo.id)} />
        <img src={photo.urls.full} className="photo-details-modal__image" />

        <div className="similar-photos">
          <h2>Related Photos</h2>
          {similar_photos.map(photo => (
            <li key={photo.id}>
              <div className="photo-details-modal__image-container">
                <PhotoFavButton isActive={favoritePhotos.has(photo.id)} toggleFavorite={() => toggleFavorite(photo.id)} />
                <img src={photo.urls.regular} className="photo-details-modal__image" alt="Main Photo" />
              </div>
              <div className="photo-details-modal__photographer-details">
                <img src={photo.user.profile} alt="Profile" className="photo-details-modal__photographer-profile" />
                <div className="photo-details-modal__photographer-info">
                  <div className="photo-details-modal__photographer-name">
                    <p><strong>{photo.user.name}</strong></p>
                  </div>
                  <div className="photo-details-modal__photographer-location">
                    <p>Location: {photo.location.city}, {photo.location.country}</p>
                  </div>
                </div>
              </div>


            </li>
          ))}
        </div>

      </div>

    </div>
  );
};





export default PhotoDetailsModal;
