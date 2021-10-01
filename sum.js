function sum() {
    let result = 0;
    for (let i=0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

// console.log(sum(1, 2, 3, 4) === 10);
// console.log(sum(1, 2, 3, 4, 5) === 15);

function sum2(...args) {
    let result = 0;
    for (let i = 0; i < args.length; i++) {
        result += args[i];
    }
    return result;
};

// console.log(sum2(1, 2, 3, 4) === 10);
// console.log(sum2(1, 2, 3, 4, 5) === 15);

Function.prototype.myBind = function (ctx) {
        let that = this;
        const arg = Array.from(arguments).slice(1);
    return function () {
       that.apply(ctx, arg, arguments);
    };
};

Function.prototype.myBind2 = function (ctx, ...args) {
    let that = this;
    return function (...args2) {
        that.apply(ctx, args, args2);
    };
};



class Cat {
    constructor(name) {
        this.name = name;
    }

    says(sound, person) {
        console.log(`${this.name} says ${sound} to ${person}!`);
        return true;
    }
}

class Dog {
    constructor(name) {
        this.name = name;
    }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind2(pavlov, "meow", "Kush")();