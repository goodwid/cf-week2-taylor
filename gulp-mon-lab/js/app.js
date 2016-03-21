var exports = {};

var pFunctionIn  = document.getElementById('pFunctionIn');
var pFunctionOut = document.getElementById('pFunctionOut');

var arg = '10, 20, 30, 40';
document.addEventListener('DOMContentLoaded', function() {

pFunctionIn.textContent  = 'Calling sumArray() with an argument of ' + arg;
pFunctionOut.textContent = 'sumArray() returned ' + sumArray([10,20,30,40]);

});
