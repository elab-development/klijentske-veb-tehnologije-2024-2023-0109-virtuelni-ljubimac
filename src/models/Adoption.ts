// src/models/Adoption.ts
import { Pet } from "./Pet";
import {User} from "../interface/User";



export class Adoption {
  id: string;
  user: User;
  pet: Pet;
  date: Date;

  constructor(id: string, user: User, pet: Pet, date: Date) {
    this.id = id;
    this.user = user;
    this.pet = pet;
    this.date = date;
  }

  summary() {
    return `${this.user.name} has adopted ${this.pet.name} on ${this.date.toDateString()}`;
  }
}
