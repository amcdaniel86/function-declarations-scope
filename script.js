// console.log(sum(2, 4));

// let sum = (a,b) => {return a + b};  

// function statement
// function sum(a, b) {
//   return a + b;
// }


// console.log(sum(3, 6));
// console.log(sum(133, 367));

// function expression - used for anonymous functions
// let sum = function(a, b) {
//   return a + b;
// };

// console.log(sum(3, 6));
// console.log(sum(133, 367));

// //functional global obstruct constructor
// let test1 = new Function('return 2');
// let test2 = new Function('a', 'return a.toUpperCase()');
// let test3 = new Function('a', 'b', 'return a+b');

// functions as values below - tricky to follow
// resultFn = resultFunction
// function add(first, second, resultFn) {
//   console.log("Add function started");
//   resultFn(first + second);
// }

// function logDone(num) {
//   console.log("I'm done! The result is: " + num);
// }

// function square(num) {
//   console.log("The square is: " + num*num);
// }

// add(2, 3, logDone);
// add(2, 3, square);

//explanation: resultFn is the PLACEHOLDER for logDone and square for each of their respective functions.
// in this case, add runs, 2+3=5, and first time, logDone is subbed in for resultFn. thus
// you have resultFn(5) => logDone(5) and then run the 2nd function logDone. console result and do the same thing with the third function.

// functions as variables
// function add (first, second, callbackFunc) {
//   console.log(first + second);
//   callbackFunc();
// }
// let logDone = function() {
//   console.log("I'm done!");
// }
// add(2, 3, logDone);

// add function runs with ( 2 + 3, and logDone is the callbackF)
// first, 2+3=5 so 5 is consollogged. then callbackFunc is called, thus logDone is called, then logDone = function {consollog this text}, 5 is consolled and then text is consolled. function ran through as a variable.


// keep in mind after first line of a function, example:
// function add (first, second) { ..different possibilities below..
// either - return, or console.log, or if (), or (let i=0; i <...)


// }

//why was the section on function declarations on tuesday in week 2? after doing all the function stuff prior, it seems to be pretty important to understanding functions.

// remember we can pass in functions as arguments into other functions if they're listed when the function is called.

//anonymous functions
function add(first, second, callback){
  let result = first + second;
  callback(result);
}

add(6, 4, function(num) {
  for (let i=0; i<num; i++) {
    console.log("we are anonymous!");
  }
});

// in this case, anonymous function was called when add was called. so its the third argument but has no name, only listed as function(num) { statements, etc}

function add(first, second, callback) {
  console.log(first + second);

  if (callback !== undefined) {
    callback();
  }
}

function logDone() {
  console.log("im done");
}

add(2,3, logDone);
add(7,3);

// add gets ran, 2+3 is consolled to 5. then checks 3rd arg. if logDone !== undefined, run logDone. then run logDone.