var stuff = require('./stuff');

console.log(stuff.counter(['seif', 'ashraf', 'maghawry']));

console.log(stuff.adder(7,6));

console.log(stuff.pi);

console.log(stuff.adder(stuff.pi,6));

const {people} = require('./stuff');    //import only people from the exports in stuff.js
console.log(people);

const os = require('os');           //importing os info from the built in os core module 
console.log(os);
console.log(os.platform(), os.homedir());       //using some built in functions, prints(win32 homepath)
