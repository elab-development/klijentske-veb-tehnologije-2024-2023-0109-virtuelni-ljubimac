import React, { useEffect, useState } from "react";
import PetCard from "../components/PetCard";
import { Pet } from "../models/types";
import { v4 as uuidv4 } from "uuid";
import { getMultipleDogs } from "../api/dogApi";

const Adopt: React.FC = () => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMultipleDogs(6)
      .then((data: string[]) => {
        const newPets: Pet[] = data.map((dogUrl) => ({
          id: uuidv4(),
          name: "Doggo",
          age: Math.floor(Math.random() * 10),
          breed: "Random",
          image: dogUrl,
        }));
        setPets(newPets);
        setLoading(false);
      })
      .catch((err: unknown) => {
        console.error("Greška pri učitavanju pasa:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Adopt a Dog</h2>
      <div className="pets-grid">
        {pets.map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
};

export default Adopt;

