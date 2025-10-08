import IPet from '../interfaces/IPet';
export default class Pet {
    constructor(name, breed, image) {
    this.name = name;
    this.breed = breed;
    this.image = image;
    this.hunger = 50;
    this.energy = 50;
    this.happiness = 50;
    this.history = [];
    }
    
    feed() {
    this.hunger = Math.max(0, this.hunger - 10);
    this.happiness = Math.min(100, this.happiness + 5);
    this.history.push(`🦴 ${this.name} je pojeo omiljenu hranu!`);
    }
    
    play() {
    this.happiness = Math.min(100, this.happiness + 10);
    this.energy = Math.max(0, this.energy - 10);
    this.history.push(`🎾 ${this.name} se igrao!`);
    }
    
    sleep() {
    this.energy = Math.min(100, this.energy + 20);
    this.hunger = Math.min(100, this.hunger + 5);
    this.history.push(`💤 ${this.name} je odspavao!`);
    }
    
    bath() {
    this.happiness = Math.min(100, this.happiness + 5);
    this.history.push(`🧼 ${this.name} je čist i mirišljav!`);
    }
    }
