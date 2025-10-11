import React, { createContext, useState, ReactNode } from "react";
import { Pet } from "../models/Pet";
import { Adoption } from "../models/Adoption";

interface PetContextType {
  pets: Pet[];
  adoptedPets: Adoption[];
  setPets: React.Dispatch<React.SetStateAction<Pet[]>>;
  adoptPet: (pet: Pet) => void;
}

export const PetContext = createContext<PetContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export const PetProvider: React.FC<Props> = ({ children }) => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [adoptedPets, setAdoptedPets] = useState<Adoption[]>(() => {
    const stored = localStorage.getItem("adoptedPets");
    return stored ? JSON.parse(stored) : [];
  });

  const adoptPet = (pet: Pet) => {
    const adoption = new Adoption(pet);
    setAdoptedPets((prev) => {
      const updated = [...prev, adoption];
      localStorage.setItem("adoptedPets", JSON.stringify(updated));
      return updated;
    });
    setPets((prev) => prev.filter((p) => p.id !== pet.id));
    alert(`Uspešno ste usvojili ${pet.name}! 🐶`);
  };

  return (
    <PetContext.Provider value={{ pets, adoptedPets, setPets, adoptPet }}>
      {children}
    </PetContext.Provider>
  );
};
