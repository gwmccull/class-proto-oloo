'use strict';

class Animal {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    callDog() {
        console.log(`${super.getName()}: woof!`);
    }
}


var Doug = new Dog("Doug");
Doug.callDog();