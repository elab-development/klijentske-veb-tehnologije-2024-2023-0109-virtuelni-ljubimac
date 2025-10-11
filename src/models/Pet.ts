export class Pet {
  id: string;
  name: string;
  age: number;
  breed: string;
  image: string;

  constructor(id: string, name: string, age: number, breed: string, image: string) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.image = image;
  }

  getInfo(): string {
    return `${this.name} je ${this.age} godina star ${this.breed}.`;
  }
}


