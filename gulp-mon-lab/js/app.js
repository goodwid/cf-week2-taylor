var exports = {};

var pFunctionIn  = document.getElementById('pFunctionIn');
var pFunctionOut = document.getElementById('pFunctionOut');

var arg = '2, 3, 4';
document.addEventListener('DOMContentLoaded', function() {

pFunctionIn.textContent  = 'Calling sumAndMultiply() with an argument of ' + arg;
pFunctionOut.textContent = 'sumAndMultiply() returned ' + sumAndMultiply(2,3,4);
console.log('hello');

});
