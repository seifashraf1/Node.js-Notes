//normal function expression 
function sayHi(name) {
    console.log('Hi ' + name);
}
sayHi('Seif');


//function expression 
var sayBye = function (name) {
    console.log('Bye ' + name);
}
sayBye('Seif');


//function to call function 
function callFunction (fun, name) {
    fun(name);
}
callFunction(sayBye, 'Seif');