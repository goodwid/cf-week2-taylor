var exports = {};

var pQ1  = document.getElementById('question-1');
var pA1 = document.getElementById('answer-1');
var pQ1  = document.getElementById('question-2');
var pA1 = document.getElementById('answer-2');
var pQ1  = document.getElementById('question-3');
var pA1 = document.getElementById('answer-3');
var pQ1  = document.getElementById('question-4');
var pA1 = document.getElementById('answer-4');
var pQ1  = document.getElementById('question-5');
var pA1 = document.getElementById('answer-5');

var questions = [
  'Write a function called sum() that takes in two numbers as arguments and then returns the sum of those numbers.',
  'Write a function called multiply() that takes in two numbers as arguments and then returns the product of those numbers.',
  'Write a function called sumAndMultiply() that takes in THREE numbers as arguments and then returns two values in an array: the sum of those numbers and the product of those numbers.',
  'Write a function called sumArray() that takes in an array of numbers as a single argument and then returns the sum of those numbers.',
  'Write a function called multiplyArray() that takes in an array of numbers as a single argument and then returns the product of those numbers.'
]


var arg = '2, 3, 4, 5';
document.addEventListener('DOMContentLoaded', function() {

pFunctionIn.textContent  = 'Calling multiplyArray() with an argument of ' + arg;
pFunctionOut.textContent = 'multiplyArray() returned ' + multiplyArray([2,3,4,5]);

});
