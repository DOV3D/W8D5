Function.prototype.inherits = function (superClass) {
    const subClass = this;
    function Surrogate() {};
    Surrogate.prototype = superClass.prototype;
    subClass.prototype = new Surrogate();
    // subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;

};

function MovingObject(name) { this.name = name; 
};

MovingObject.prototype.yell = function () {
    console.log(`${this.name}!!!!!!!!`)};

function Ship() { }
Ship.inherits(MovingObject);
Ship.prototype.fly = function () {
    console.log(`Ship is flying!`);
}

function Asteroid() { }
Asteroid.inherits(Ship);

const meteor = new Asteroid();

console.log(Object.getPrototypeOf(meteor));
console.log(meteor.__proto__);

// meteor.yell();
// meteor.fly();
// const mo = new MovingObject();
// mo.fly();



