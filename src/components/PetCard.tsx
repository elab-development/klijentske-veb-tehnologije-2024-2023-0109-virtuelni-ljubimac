import React from "react";
import { Pet } from "../interface/types"; 

interface PetCardProps {
  pet: Pet;
}

const PetCard: React.FC<PetCardProps> = ({ pet }) => {
  return (
    <div className="pet-card">
      <img src={pet.image} alt={pet.name} />
      <h3>{pet.name}</h3>
      <p>Breed: {pet.breed}</p>
      <p>Age: {pet.age}</p>
    </div>
  );
};

export default PetCard;


