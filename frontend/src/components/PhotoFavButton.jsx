import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  // State to track whether the photo is liked
  const [isLiked, setIsLiked] = useState(false);

  // Toggle function for the like button
  const toggleLike = useCallback(() => {
    setIsLiked(prev => !prev);
  }, []);

  return (
    <button className="photo-list__fav-icon" onClick={toggleLike}>
      <div className="photo-list__fav-icon-svg">
        {/* Render the FavIcon differently based on the isLiked state */}
        <FavIcon filled={isLiked} />
      </div>
    </button>
  );
}


export default PhotoFavButton;