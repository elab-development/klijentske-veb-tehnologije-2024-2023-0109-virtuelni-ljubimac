class IPet {
    constructor() {
    if (this.constructor === IPet) {
    throw new Error("Ne možete direktno instancirati interfejs IPet");
    }
    }
    
    feed() {
    throw new Error("Metoda feed() mora biti implementirana");
    }
    
    play() {
    throw new Error("Metoda play() mora biti implementirana");
    }
    
    sleep() {
    throw new Error("Metoda sleep() mora biti implementirana");
    }
    }
    
    export default IPet;