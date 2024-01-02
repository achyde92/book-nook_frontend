import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from '../BookDetailsPage/Book';

const FavoritesList = () => {
    const [favorites, setFavorites] = useState([]);
  
    useEffect(() => {
      const fetchFavorites = async () => {
        try {
          const response = await axios.get('https://localhost:5001/api/favorites/myfavorites');
          setFavorites(response.data);
        } catch (error) {
          console.error('Error fetching favorites:', error);
        }
      };
  
      fetchFavorites();
    }, []);
  
    return (
      <div>
        <h2>Favorites List</h2>
        {favorites.length === 0 ? (
          <p>No favorites yet.</p>
        ) : (
          <div>
            {favorites.map((favorite, index) => (
              <Book
                key={index}
                imageURL={favorite.imageURL}
                title={favorite.title}
                author={favorite.author}
                description={favorite.description}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

export default FavoritesList;