import IPet from '../interfaces/IPet';

class Pet extends IPet {
constructor(name) {
super();
this.name = name;
this.hunger = 50;
this.happiness = 50;
this.energy = 50;
}

feed() {
this.hunger = Math.min(this.hunger + 10, 100);
}

play() {
this.happiness = Math.min(this.happiness + 10, 100);
}

sleep() {
this.energy = Math.min(this.energy + 10, 100);
}
}

export default Pet;