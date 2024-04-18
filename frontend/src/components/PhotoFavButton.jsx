import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  // State to track if the icon is favorited or not
  const [isActive, setIsActive] = useState(false);

  // Toggle function to change state
  const toggleFavorite = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="photo-list__fav-icon" onClick={toggleFavorite}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isActive} />
      </div>
    </div>
  );
}

export default PhotoFavButton;