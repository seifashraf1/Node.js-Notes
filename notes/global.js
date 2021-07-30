//Global Object
//it is like window in js in the browser and it has some functions 
//run this to see the functions 

/*
console.log(global);

//a function to do smth after some time specified 
//replace 3000 with any number you want in ms 
//here it will print hii bro after 3000 ms = 3 sec
//you don't have to type global. (it can work without it)
global.setTimeout(() => {
    console.log("Hii bro");
}, 3000);



//setInterval is a function to do smth each some time specified 
const int = setInterval(()=> {
    console.log("2 seconds passed");
}, 2000);

//to stop the above function use clearInterval(name of const) inside setTimeOut
setTimeout(() => {
    clearInterval(int);
}, 4000);
*/

//to print current directory and filename with path
console.log(__dirname);
console.log(__filename);