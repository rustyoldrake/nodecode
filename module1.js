console.log('----  module1.js ----')
console.log('I am programming in JavaScript');
var a=1;  // a variable with a value
var b=2;  // a variable with a value
var c;   // let us initialize a variable, but not assign it yet
c = a+b; // this adds my two variables
console.log('the variable a plus b equals',c)

console.log('----  module_variables.js ----')
var variables = require('./module_variables.js')
console.log('all variables',variables)
console.log('x',variables.x)
console.log('y',variables.y)
console.log('z',variables.z)

console.log('----  module_called_from_another.js ----')
var cfa = require('./module_called_from_another.js');
//cfa();
// for more background on super basics - this tutoral is good: https://www.youtube.com/watch?v=pU9Q6oiQNd0
//console.log('----  underscore module (from npm install underscore ) ----');
//var _ = require('underscore');
//console.log(_);


// also ran npm init
