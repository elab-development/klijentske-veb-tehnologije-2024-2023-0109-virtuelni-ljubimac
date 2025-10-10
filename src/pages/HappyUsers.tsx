import React from "react";
import "./HappyUsers.css";

const HappyUsers: React.FC = () => {
  const reviews = [
    {
      id: 1,
      name: "Ana",
      comment: "Usvojila sam prelepog psa i ne mogu biti srećnija! ❤️",
      image: "https://images.unsplash.com/photo-1601758124090-3c28a0a0f87b",
    },
    {
      id: 2,
      name: "Marko",
      comment: "Sjajno iskustvo! Proces je bio brz i jednostavan. 🐶",
      image: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b6",
    },
    {
      id: 3,
      name: "Jelena",
      comment: "Moj novi ljubimac je savršen, hvala vam puno! 🐾",
      image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d",
    },
  ];

  return (
    <div className="happy-users">
      <h1>Zadovoljni korisnici</h1>
      <p className="subtitle">
        Pogledajte utiske korisnika koji su pronašli svoje savršene ljubimce ❤️
      </p>
      <div className="reviews-container">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <img src={review.image} alt={review.name} />
            <h3>{review.name}</h3>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HappyUsers;
