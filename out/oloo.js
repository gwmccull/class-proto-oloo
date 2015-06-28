"use strict";

var Animal = {
    init: function init(name) {
        this.name = name;
    },
    getName: function getName() {
        return this.name;
    }
};

var Dog = Object.create(Animal);
Dog.callDog = function () {
    console.log("" + this.getName() + ": woof!");
};

var Doug = Object.create(Dog);
Doug.init("Doug");
Doug.callDog();
//# sourceMappingURL=oloo.js.map