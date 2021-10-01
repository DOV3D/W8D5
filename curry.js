curriedSum = function (numArgs) {
    let numbers = [];
    function _curriedSum(num) {
        numbers.push(num);
        if (numbers.length === numArgs){
            const reducer = (previousValue, currentValue) => previousValue + currentValue;
            return numbers.reduce(reducer);
        } else {
            return _curriedSum;
        };
    };
    return _curriedSum;
};

const sum = curriedSum(4);
console.log(sum(5)(30)(20)(1)); // => 56

Function.prototype.curry = function (numArgs) {
    let nums = [];
    const inCurry = function (arg) {
        nums.push(arg);
        if (nums.length === numArgs) {
            debugger;
            return this(...nums);
        } else{
            return inCurry.bind(this);
        };
    };

    return inCurry.bind(this);
    

};

function sumThree(num1, num2, num3) {
    return num1 + num2 + num3;
  }
console.log(sumThree.curry(3)(4)(5)(6));