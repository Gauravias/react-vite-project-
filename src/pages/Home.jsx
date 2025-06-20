import React from 'react';
import ImageSlider from '../components/ImageSlider';
import Card from '../components/Card';
import './Home.css'; // Import the new stylesheet

// This is the Home Page component.
const Home = () => {
  // Data for the image slider
  const sliderImages = [
    { url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop', title: 'Explore Majestic Mountains', caption: 'Discover breathtaking landscapes and serene nature.' },
    { url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop', title: 'Serene Coastal Escapes', caption: 'Relax by the crystal clear waters and sandy beaches.' },
    { url: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop', title: 'Enchanting Forest Trails', caption: 'Wander through ancient woods and reconnect with nature.' },
  ];

  // Data for the cards
  const cardData = [
    { title: 'AI Innovation', description: 'Explore the cutting edge of artificial intelligence and its impact on our world.', imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop' },
    { title: 'Space Exploration', description: 'Journey to the stars and uncover the mysteries of the cosmos with the latest discoveries.', imageUrl: 'https://images.unsplash.com/photo-1541185934-01b600ea069c?q=80&w=2070&auto=format&fit=crop' },
    { title: 'Sustainable Living', description: 'Learn how to live a more eco-friendly lifestyle and make a positive impact.', imageUrl: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=1974&auto=format&fit=crop' },
    { title: 'Urban Architecture', description: 'Discover the beauty and complexity of modern cityscapes and architectural marvels.', imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop' },
    { title: 'Global Connectivity', description: 'Understand how technology is connecting people and cultures across the globe.', imageUrl: 'https://images.unsplash.com/photo-1585698939014-b45a3c3b0188?q=80&w=1932&auto=format&fit=crop' },
  ];

  return (
    <div className="home-page">
      <ImageSlider slides={sliderImages} />
      <section className="cards-section">
        <div className="container">
          <h2 className="section-title">Featured Topics</h2>
          <p className="section-subtitle">Dive into subjects that are shaping our future.</p>
          <div className="cards-grid">
            {cardData.map((card, index) => (
              <Card 
                key={index} 
                title={card.title} 
                description={card.description} 
                imageUrl={card.imageUrl} 
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
