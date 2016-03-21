var pFunctionIn  = document.getElementById('pFunctionIn');
var pFunctionOut = document.getElementById('pFunctionOut');

var arg = '8, 3';
pFunctionIn.textContent  = 'Calling multiply() with an argument of ' + arg;
pFunctionOut.textContent = 'multiply() returned ' + multiply(8,3);
