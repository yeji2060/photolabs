import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ onClose, photo }) => {
  React.useEffect(() => {
    console.log('Selected Photo Details:', photo); // Log photo details when the modal is opened and the photo prop changes
  }, [photo]);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="Close symbol" />
      </button>
      <div className="photo-details-content">
        <h2>{photo?.user.username}</h2>
        <img src={photo?.urls.regular} alt={photo?.description} />
        <p>{photo?.description}</p>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
