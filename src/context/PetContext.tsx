import React, { createContext, useState, ReactNode } from "react";
import { Pet } from "../models/Pet";

interface PetContextType {
  pets: Pet[];
  adoptPet: (petId: string) => void;
}

export const PetContext = createContext<PetContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export const PetProvider: React.FC<Props> = ({ children }) => {
  const [pets, setPets] = useState<Pet[]>([]);

  const adoptPet = (petId: string) => {
    setPets((prev) => prev.filter((p) => p.id !== petId));
  };

  return (
    <PetContext.Provider value={{ pets, adoptPet }}>
      {children}
    </PetContext.Provider>
  );
};
// ili barem ovo da ga TS prepozna kao modul
export {};
