import React from 'react';
import './PetCard.css';

const PetCard = ({ name, img, description, question, onAdopt }) => {
return (
<div className="pet-card">
<img src={img} alt={name} className="pet-img" referrerPolicy='no-referrer' />
<h3>{name}</h3>
<p>{description}</p>
{question && <p className="question">❓ {question}</p>}
<button onClick={onAdopt}>Usvoji</button>
</div>
);
};

export default PetCard;