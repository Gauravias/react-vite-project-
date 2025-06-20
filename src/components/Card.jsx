import React from 'react';
import './Card.css';

const Card = ({ title, description, imageUrl }) => {
  // Fallback image in case the provided one fails
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = 'https://placehold.co/600x400/1e293b/ffffff?text=Image';
  };

  return (
    <div className="card">
      <img
        src={imageUrl}
        alt={title}
        className="card-image"
        onError={handleImageError}
      />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <button className="card-button">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card;
