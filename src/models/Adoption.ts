import { Pet } from "./Pet";

export class Adoption {
  pet: Pet;
  date: Date;

  constructor(pet: Pet) {
    this.pet = pet;
    this.date = new Date();
  }

  getSummary(): string {
    return `Usvojen ${this.pet.name} dana ${this.date.toLocaleDateString()}.`;
  }
}
