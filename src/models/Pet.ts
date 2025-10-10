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

  greet() {
    return `Hi, I am ${this.name}!`;
  }
}


