var exports = {};

document.addEventListener('DOMContentLoaded', function() {

  var pQ1  = document.getElementById('question-1');
  var pA1 = document.getElementById('answer-1');
  var pQ2  = document.getElementById('question-2');
  var pA2 = document.getElementById('answer-2');
  var pQ3  = document.getElementById('question-3');
  var pA3 = document.getElementById('answer-3');
  var pQ4  = document.getElementById('question-4');
  var pA4 = document.getElementById('answer-4');
  var pQ5  = document.getElementById('question-5');
  var pA5 = document.getElementById('answer-5');

  var questions = [
    'Problem 1: Write a function called sum() that takes in two numbers as arguments and then returns the sum of those numbers.',
    'Problem 2: Write a function called multiply() that takes in two numbers as arguments and then returns the product of those numbers.',
    'Problem 3: Write a function called sumAndMultiply() that takes in THREE numbers as arguments and then returns two values in an array: the sum of those numbers and the product of those numbers.',
    'Problem 4: Write a function called sumArray() that takes in an array of numbers as a single argument and then returns the sum of those numbers.',
    'Problem 5: Write a function called multiplyArray() that takes in an array of numbers as a single argument and then returns the product of those numbers.'
  ];

  pQ1.textContent = questions[0];
  pQ2.textContent = questions[1];
  pQ3.textContent = questions[2];
  pQ4.textContent = questions[3];
  pQ5.textContent = questions[4];

  var sumOf = sum(45,55);
  var multiplyBy = multiply(30,90);
  var sumAndMultiplyBy = sumAndMultiply(3,4,5);
  var sumOfArray = sumArray([1,2,3,4,5,6,7,8,9]);
  var multiplyOfArray = multiplyArray([1,2,3,4,5]);

  pA1.textContent = 'OUTPUT: ' + sumOf;
  pA2.textContent = 'OUTPUT: ' + multiplyBy;
  pA3.textContent = 'OUTPUT: ' + sumAndMultiplyBy;
  pA4.textContent = 'OUTPUT: ' + sumOfArray;
  pA5.textContent = 'OUTPUT: ' + multiplyOfArray;

});
