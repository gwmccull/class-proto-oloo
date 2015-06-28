"use strict";

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var Animal = (function () {
    function Animal(name) {
        _classCallCheck(this, Animal);

        this.name = name;
    }

    _createClass(Animal, [{
        key: "getName",
        value: function getName() {
            return this.name;
        }
    }]);

    return Animal;
})();

var Dog = (function (_Animal) {
    function Dog(name) {
        _classCallCheck(this, Dog);

        _get(Object.getPrototypeOf(Dog.prototype), "constructor", this).call(this, name);
    }

    _inherits(Dog, _Animal);

    _createClass(Dog, [{
        key: "callDog",
        value: function callDog() {
            console.log("" + _get(Object.getPrototypeOf(Dog.prototype), "getName", this).call(this) + ": woof!");
        }
    }]);

    return Dog;
})(Animal);

var Doug = new Dog("Doug");
Doug.callDog();
//# sourceMappingURL=class.js.map