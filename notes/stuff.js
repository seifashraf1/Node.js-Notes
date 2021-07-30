var counter = function (arr) {
    return 'There are ' + arr.length + ' elements in this array';
};

var adder = function (a,b) {
    return `the sum of ${a} and ${b} is ${a+b}`; 
    //use ` ` instead of ' ' to be able to use ${} for variables without concatenation like the function above
}

var pi = 3.142;

const people = ['seif', 'ashraf', 'test'];


//NOTE: we can replace var counter with module.exports.counter and same for the others 
//module.exports.counter = function (arr) {//whatever};
module.exports.counter = counter; //counter will be returned when calling require(./count) from any file

module.exports.adder = adder;

module.exports.pi = pi;

//NOTE: we can do this also
module.exports = {
    counter: counter,
    adder: adder,
    pi: pi,
    people          //you can just export it like this but use the name in any file you want to import in
};  