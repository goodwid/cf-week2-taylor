var exports = {};

var pFunctionIn  = document.getElementById('pFunctionIn');
var pFunctionOut = document.getElementById('pFunctionOut');

var arg = '2, 3, 4, 5';
document.addEventListener('DOMContentLoaded', function() {

pFunctionIn.textContent  = 'Calling multiplyArray() with an argument of ' + arg;
pFunctionOut.textContent = 'multiplyArray() returned ' + multiplyArray([2,3,4,5]);

});
