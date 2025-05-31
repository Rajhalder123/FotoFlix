import React from 'react';
import Photos from './photos'; // Import the Photos component

const Favourite = ({ favoritePhotos, handleRemoveFavorite }) => {
  return (
    <div>
      {/* Sticky Navbar */}
      <nav className="navbar">
        <div className="navbar__logo-1">Favourites</div>
        <div className="navbar__links">
          <a href="/FotoFlix">Home</a>
        </div>
      </nav>

      <main>
        <section className="photos">
          <div className="photos-center">
            {favoritePhotos.map((image, index) => {
              return (
                <Photos
                  key={index}
                  {...image}
                  isFavorite={true} // All images in the Favourite component are favorites
                  onFavoriteClick={() => handleRemoveFavorite(image)} // Pass the handleRemoveFavorite function here
                >
                  {/* Pass isFavorite to Photos to show the favorite status */}
                  <span>Added to Favorites</span>
                </Photos>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Favourite;