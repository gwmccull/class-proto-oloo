var Animal = {
    init: function(name) {
        this.name = name;
    },
    getName: function() {
        return this.name;
    }
};

var Dog = Object.create(Animal);
Dog.callDog = function() {
    console.log(`${this.getName()}: woof!`);
};

var Doug = Object.create(Dog);
Doug.init("Doug");
Doug.callDog();